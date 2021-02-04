import React, { useState } from 'react';

import { ActionButton } from 'components/ActionButton';

import styled from 'styled-components/macro';
import { theme } from 'styling/theme';

import { SectionHeading } from 'styling/headings';

export const AddRecipe = () => {
  const [meal, setMeal] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const ADDRECIPE_URL = 'https://recept-api.herokuapp.com/recipes';

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredients.split(', ');
    window.location.reload();

    // Insert a POST request
    fetch(ADDRECIPE_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ meal, description, ingredients })
      })
      .then(() => {
        setMeal();
        setIngredients([]);
        setDescription();
      });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <SectionHeading>Lägg till nytt recept:</SectionHeading>
      <LabelField>
        Namn på måltid:
        <InputField
          required
          placeholder='Namn på måltid'
          type='text'
          value={meal}
          onChange={(event) => setMeal(event.target.value)} />
      </LabelField>
      <LabelField>
        Beskrivning:
        <InputField
          required
          placeholder='Skriv in instruktioner för hur du lagar den här måltiden'
          type='text'
          value={description}
          onChange={(event) => setDescription(event.target.value)} />
      </LabelField>
      <LabelField>
        Ingredienser:
        <InputField
          required
          placeholder='Skriv in ingredienserna som behövs för den här rätten'
          type='text'
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)} />
      </LabelField>
      <ActionButton
        type="submit"
        function={handleSubmit}
        title='Lägg till recept!' />
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const LabelField = styled.label`
  margin: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 16px;
`;

const InputField = styled.input`
  margin-top: 4px;
  padding: 4px;
  width: 280px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #749694;
  font-size: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: ${theme.fonts.mainfont};

  /* Styling of placeholder text */
  ::-webkit-input-placeholder {
    word-wrap: break-word;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    word-wrap: break-word;
  }
  :-ms-input-placeholder { /* IE 10+ */
    word-wrap: break-word;
  }
  :-moz-placeholder { /* Firefox 18- */
    word-wrap: break-word;
  }
`;
