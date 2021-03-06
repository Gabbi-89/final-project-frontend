import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AddRecipe } from 'components/AddRecipe';
import { ActionButton } from 'components/ActionButton';

import styled from 'styled-components/macro';

import { Wrapper } from 'styling/wrapper';
import { SectionHeading } from 'styling/headings';

export const Recipes = () => {

  const [newRecipe, setNewRecipe] = useState('');
  const [recipes, setRecipes] = useState([]);

  // GET request to get all recipes
  const RECIPE_URL = 'https://recept-api.herokuapp.com/recipes';

  useEffect(() => {
    fetch(RECIPE_URL)
      .then((res) => res.json())
      .then((json) => {
        setRecipes(json)
      })
  }, [newRecipe]);

  const showAddRecipe = () => {
    setNewRecipe('AddRecipe')
  };

  const hideAddRecipe = () => {
    setNewRecipe('')
  }

  if (newRecipe === 'AddRecipe') {
    return <AddRecipe onFormSubmit={hideAddRecipe} />
  } else {
    return (
      <Wrapper>
        <SectionHeading>Alla recept</SectionHeading>
        <div>
          {recipes.map((recipe) => (
            <div key={recipe._id} className={recipe._id}>
              <Link to={`/recipes/${recipe._id}`} className="link" >
                <ListElement>{recipe.meal}</ListElement>
              </Link>
            </div>
          ))}
        </div>
        <ActionButton
          type='button'
          function={showAddRecipe}
          title='Lägg till recept!'>
        </ActionButton>
      </Wrapper>
    )
  }
};

const ListElement = styled.li`
  font-size: 16px;
  margin-top: 4px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  

  :active, :visited, :link {
    text-decoration-line: none;
    -moz-text-decoration-line: none;
    -webkit-text-decoration-line: none;
  }

  :hover {
    color:  #8c0e1b;
  }
`;
