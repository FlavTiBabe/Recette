import React from 'react';

function Recipe({title,img,ingredients,instructions}) {
  return (
    <>
    <h1>{title}</h1>
    <img src={img}/>
    <div>
      <h2>Ingrédients</h2>
      <ul>
        {ingredients.length > 0 && ingredients.map((ingredient) => <li>{ingredient}</li>)}
      </ul>
      <h2>Instructions</h2>
      <ol>
          {instructions.length > 0 && instructions.map((instruction) => <li>{instruction}</li>)}
      </ol>
    </div>
    </>
  );
}

export default Recipe;

