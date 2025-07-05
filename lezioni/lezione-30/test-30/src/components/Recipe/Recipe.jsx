import './Recipe.css';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

export default function Recipe({ recipe, updateRecipe }) {

  const FavoriteIcon = recipe.isFavorite ? IoIosStar : IoIosStarOutline;

  return (
    <div className='card-recipe'>
      <h2>{recipe.title}</h2>
      <img src={recipe.photo} alt={recipe.title} />

      <div className='div-icon'>
        <FavoriteIcon
          className='icon'
          onClick={() => updateRecipe(recipe)}
        />
      </div>

      <p>di {recipe.author}</p>
      <p>⌛ {recipe.prep_time}</p>
      <p>{recipe.cuisine_type}</p>
      <p>{recipe.description}</p>
    </div>
  );
}
