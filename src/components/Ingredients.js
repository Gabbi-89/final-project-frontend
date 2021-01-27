import React, { useEffect, useState } from 'react';

import { Wrapper } from 'styling/wrapper';

export const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  // GET request to get all recipes
  const RECIPE_URL = 'https://recept-api.herokuapp.com/recipes';

  useEffect(() => {
    fetch(RECIPE_URL)
      .then(res => res.json())
      .then(json => {
        setIngredients(json)
        console.log(json)
      })
  }, []);

  return (
    <Wrapper>
      <h3>Alla ingredienser</h3>
      <div>
        {ingredients.map((ingredient) => (
          <p>{ingredient.ingredients}</p>
        ))}
      </div>
    </Wrapper>
  );
};