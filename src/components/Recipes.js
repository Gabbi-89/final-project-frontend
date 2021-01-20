import React, { useEffect, useState } from 'react';

import { AddRecipe } from 'components/AddRecipe';

import styled from 'styled-components/macro';

import { Container } from 'styling/GlobalStyles';

export const Recipes = () => {
  const [newRecipe, setNewRecipe] = useState('');
  const [recipes, setRecipes] = useState([]);

  // GET request to get all recipes
  const RECIPE_URL = '';

  useEffect(() => {
    fetch(RECIPE_URL)
      .then(res => res.json())
      .then(json => {
        setRecipes(json.results)
      })
  }, []);

  const showAddRecipe = () => {
    setNewRecipe('AddRecipe')
  };

  if (newRecipe === 'AddRecipe') {
    return <AddRecipe />
  } else {
    return (
      <Container>
        <h3>Alla recept</h3>
        <AddRecipeButton onClick={showAddRecipe}>Lägg till recept!</AddRecipeButton>
      </Container>
    )
  }
};


const AddRecipeButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  padding: 4px;
  width: 150px;
  margin-top: 10px;
  align-self: center;
`;