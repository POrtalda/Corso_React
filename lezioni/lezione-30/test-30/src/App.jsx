import { useEffect, useState } from 'react'
import './App.css'
import Recipe from './components/Recipe/Recipe'

const API_URL = 'https://portalda.github.io/fake-api-recipes/recipes.json';

function App() {
  const [recipes, setRecipes] = useState(null)
  const [showFavorite, setShowFavorite] = useState(false)

  useEffect(() => {
    callAPI();
  }, [])

  useEffect(() => {
    if (recipes !== null) {

      const favRecipes = recipes.filter(recipe => recipe.isFavorite)
        .map(recipe => recipe.id)

      console.log(favRecipes)

      localStorage.setItem('fav-recipes', JSON.stringify(favRecipes))
    }

  }, [recipes])

  function callAPI() {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        //console.log(data)

        // leggi dal localstorage
        const favRecipes = JSON.parse(localStorage.getItem('fav-recipes')) || [];
        
        // IMPORTANTE!!!!!
        // inserire in setRecipes anche isFavorite
        // creiamo un nuovo array da mettere nello stato recipes
        // questo array cicla i dati che arrivano dall'API e per ogni ricetta
        // aggiunge la proprietà isFavorite e la mette a true se è 
        // contenuta in favRecipes altrimenti la valorizza a false 
        const newRecipes = data.map(recipe => (
          { ...recipe, isFavorite: favRecipes.includes(recipe.id) }
        ))

        setRecipes(newRecipes)
        console.log({ newRecipes })

      })
  }

  function handleUpdateRecipe(updateRecipe) {
    //alert(`hai cliccato la stellina della ricetta con id ${recipe.id}`)

    // qui aggiorno isFavorite
    const newRecipe = { ...updateRecipe, isFavorite: !updateRecipe.isFavorite }

    // aggiorno tutto lo stato recipes
    setRecipes(recipes.map(updateRecipe => (
      updateRecipe.id === newRecipe.id ? newRecipe : updateRecipe)))
  }

  return (
    <>
      <h1>🥧 Ricette Reactose 🍝</h1>

      <button onClick={() => setShowFavorite(!showFavorite)}>
        {showFavorite ? (
          'tutte le ricette'
        ): (
          'preferite'
        )}
      </button>

      {recipes !== null ? (

        // qui c'è la logica del button per vedere solo le ricette preferite!!!
        // se showFavorite è true prendo solo le ricette preferite
        // altrimenti prendile tutte
        (showFavorite ? recipes.filter(recipe => recipe.isFavorite) : recipes)
        .map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} updateRecipe={handleUpdateRecipe} />
        ))
      ) : (
        <p>Caricamento delle ricette in corso ...</p>
      )}

    </>
  )
}

export default App
