import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "../components/Menu/Menu";
import App from "../App";
import { useEffect, useState } from "react";


const URL_API = 'https://portalda.github.io/fake_repository_iro/superHeroes.json'

export default function AppRoutes() {

    

    const [heroes, setHeroes] = useState(null)

    // effetto collaterale: chiamare la fetch quando 
    // il componente viene montato
    useEffect(() => {
        getHeroesApi()
    }, [])

    function getHeroesApi() {
        fetch(URL_API)
        .then(res => res.json())
        .then(data => {
            setHeroes(data)
        })
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={

                        <App heroes={heroes}>
                            <Menu title='home page' />
                        </App>

                    } />
                    <Route path="favorite" element={

                        <App>
                            <Menu title='preferiti' />
                        </App>

                    } />
                    <Route path="*" element={<h1>Errore, Pagina non trovata</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}