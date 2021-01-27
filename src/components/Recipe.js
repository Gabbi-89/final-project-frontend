import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Wrapper } from 'styling/wrapper';

import { ActionButton } from 'components/ActionButton';
import { SectionHeading } from 'styling/headings';

import styled from 'styled-components/macro';

export const Recipe = () => {
  const history = useHistory();
  const { _id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(`https://recept-api.herokuapp.com/recipes/${_id}`)
      .then(res => res.json())
      .then(json => {
        setRecipe(json);
      })
  }, [_id]);

  return (
    <Wrapper>
      <ActionButton
        function={history.goBack}
        type='button'
        title='Tillbaka'>
      </ActionButton>
      <SectionHeading>{recipe.meal}</SectionHeading>
      <div>
        <UnderlinedText>Det här behöver du:</UnderlinedText>
        <p>{recipe.ingredients}</p>
        <UnderlinedText>Gör så här:</UnderlinedText>
        <p>{recipe.description}</p>
      </div>
    </Wrapper>
  );
};

const UnderlinedText = styled.p`
  text-decoration: underline;
  margin-bottom: -10px;
`;


// Idea for design https://dribbble.com/shots/5246052-Personalised-meal-planning-app