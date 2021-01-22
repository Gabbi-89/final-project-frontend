import React from 'react';
import { useHistory } from 'react-router-dom';

import { Wrapper } from 'styling/wrapper';

import { ActionButton } from 'components/ActionButton';

export const Recipe = ({ meal, description, ingredients }) => {
  const history = useHistory();

  return (
    <Wrapper>
      <ActionButton
        function={history.goBack}
        type='button'
        title='Tillbaka'>
      </ActionButton>
      <p>{meal}</p>
      {console.log(meal)}
      <div>
        <p>Det här behöver du: {ingredients}</p>
        <p>Gör så här: {description}</p>
      </div>
    </Wrapper>
  );
};

// Idea for design https://dribbble.com/shots/5246052-Personalised-meal-planning-app