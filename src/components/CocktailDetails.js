import React from "react";

export default function CocktailDetails(props) {
  console.log("PROPS IN COCKTAILDETAILS ARE", props);
  const cocktail = props.cocktail;
  return (
    <div>
      <h2>Cocktail: {cocktail.drink}</h2>
      <p>
        <strong>Ingredients</strong>
        <br></br>
        <br></br>
        {cocktail.ingredients.map(ingredient => {
          console.log(ingredient.name);
          console.log(ingredient.measure);

          return `• ${ingredient.name}: ${ingredient.measure} • `;
        })}
      </p>

      <p>
        <strong>Instructions</strong>
        <br></br>
        <br></br>
        <i>{cocktail.instructions}</i>
      </p>
    </div>
  );
}
