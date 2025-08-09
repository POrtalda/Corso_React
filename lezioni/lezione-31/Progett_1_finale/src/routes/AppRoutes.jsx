import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "../components/Menu/Menu";
import App from "../App";
import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { use } from "react";
import Detail from "../components/Detail/Detail";


const URL_API = 'https://portalda.github.io/fake_repository_iro/superHeroes.json'

export default function AppRoutes() {

    const [isDarkMode, setIsDarkMode] = useState(null)

    const [heroes, setHeroes] = useState(null)

    // effetto collaterale: chiamare la fetch quando 
    // il componente viene montato
    useEffect(() => {
        getHeroesApi()
    }, [])

    // effetto collaterale 
    // quando heroes cambia, scrivi nel localStorage un array 
    //con i suoi super eroi preferiti
    useEffect(() => {
        {
            if (heroes !== null) {
                const favHeroesId = heroes.filter(h => h.isFavorite)
                    .map(h => (h.id))
                //console.log(favHeroesId)

                localStorage.setItem('fav-heroes-id',
                    JSON.stringify(favHeroesId))
            }
        }

    }, [heroes])

    useEffect(() => {
    
        const isDarkMode = JSON.parse(localStorage.getItem("heroes-dark-mode"))

        setIsDarkMode(isDarkMode)
    
   }, [])


    useEffect(() => {

        localStorage.setItem("heroes-dark-mode", JSON.stringify(isDarkMode))

    }, [isDarkMode])

   
    function getHeroesApi() {
        fetch(URL_API)
            .then(res => res.json())
            .then(data => {

                const lsFavHeroesId = JSON.parse(localStorage.getItem('fav-heroes-id')) || []

                const newHeroes = data.map(h => (
                    { ...h, isFavorite: lsFavHeroesId.includes(h.id) }
                ))
                setHeroes(newHeroes)
            })
    }

    function toggleFavorite(id) {
        // alert(`hai cliccato la stellina con id ${id}`)

        const newHeroes = heroes.map(h => (
            // se l'id è uguale a h. id
            id === h.id ? {
                // crei una copia di h con isFavorite inverso da prima
                ...h, isFavorite: !h.isFavorite
            } :
                // altrimenti visualizza h
                h
        ))
        setHeroes(newHeroes)
    }

    return (
        <>
            <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={

                            <App heroes={heroes} toggleFavorite={(id) => toggleFavorite(id)}>
                                <Menu title='home page' />
                            </App>

                        } />
                        <Route path="favorite" element={

                            <App heroes={heroes ?  heroes.filter(h => h.isFavorite) : []} 
                            toggleFavorite={(id) => toggleFavorite(id) || []}>
                                <Menu title='preferiti' />
                            </App>

                        } />

                        <Route path="detail/:id" element={
                            <Detail heroes={heroes}>
                               <Menu title='dettagli eroe' />
                            </Detail>
                        }/>
                        

                        <Route path="*" element={<h1>Errore, Pagina non trovata</h1>} />
                    
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </>
    )
}