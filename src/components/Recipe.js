import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Wrapper } from 'styling/wrapper';

import { ActionButton } from 'components/ActionButton';
import { SectionHeading } from 'styling/headings';

import styled from 'styled-components/macro';

import { theme } from 'styling/theme';

export const Recipe = () => {
  const history = useHistory();
  const { _id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(`https://recept-api.herokuapp.com/recipes/${_id}`)
      .then((res) => res.json())
      .then((json) => {
        setRecipe(json);
      })
  }, [_id]);

  const arrayOfIngredients = recipe.ingredients;

  var str = recipe.description;
  console.log(str)
   
  return (
    <Wrapper>
      <ActionButton
        function={history.goBack}
        type='button'
        title='Tillbaka' />
      <SectionHeading>{recipe.meal}</SectionHeading>
      <div>
        <UnderlinedText>Det här behöver du:</UnderlinedText>
        {arrayOfIngredients && (
          <ul key={arrayOfIngredients[0]}>{arrayOfIngredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
          </ul>
        )}
        <RecipeDescription>
          <UnderlinedText>Gör så här:</UnderlinedText>
          {/* OM htto länk så vissa detta annars recept beskrivningen */}
          {recipe.description && (
            <RecipeLink href={recipe.description} target='_blank'>Följ receptlänk</RecipeLink>
          )} 
          {recipe.description && (
            <p>{recipe.description}</p>
          )}
        </RecipeDescription>
      </div>
    </Wrapper>
  );
};

const UnderlinedText = styled.p`
  text-decoration: underline;
`;

const RecipeDescription = styled.div`
  display: flex;
`;

const RecipeLink = styled.a`
  color: ${theme.colors.dark};
  text-decoration-line: none;
  -moz-text-decoration-line: none;
  -webkit-text-decoration-line: none;
  margin: 16px 0 16px 6px;
  

  :visited, :link, :active {
    color: ${theme.colors.dark};
  }
`;

// Idea for design https://dribbble.com/shots/5246052-Personalised-meal-planning-app