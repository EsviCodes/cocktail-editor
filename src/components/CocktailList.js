import React from "react";

export default function CocktailList(props) {
  return (
    <div>
      <h1>Cocktail Party!</h1>
      <h2>Click on a cocktail and create your own!</h2>
      <h3>Super awesome cocktails</h3>
      <ul>
        {props.cocktails.map(cocktail => {
          return (
            <li
              key={cocktail.id}
              onClick={() => props.selectCocktail(cocktail.id)}
            >
              {cocktail.drink}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
