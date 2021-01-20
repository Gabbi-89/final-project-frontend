import React, { useState } from 'react';

import styled from 'styled-components/macro';

export const AddRecipe = () => {
  const [meal, setMeal] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  // Insert a POST request

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h3>Lägg till nytt recept:</h3>
      <LabelField>
        Namn på måltid:
        <InputField
          required
          placeholder='Namn på måltid'
          type='text'
          value={meal}
          onChange={event => setMeal(event.target.value)}
        />
      </LabelField>
      <LabelField>
        Namn på måltid:
        <InputField
          required
          placeholder='Namn på måltid'
          type='text'
          value={meal}
          onChange={event => setMeal(event.target.value)}
        />
      </LabelField>
      <LabelField>
        Beskrivning:
        <InputField
          required
          placeholder='Skriv in instruktioner för hur du lagar den här måltiden'
          type='text'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </LabelField>
      <LabelField>
        Ingredienser:
        <InputField
          required
          placeholder='Skriv in ingredienserna som behövs för att laga den här måltiden'
          type='text'
          value={ingredients}
          onChange={event => setIngredients(event.target.value)}
        />
      </LabelField>
      <AddRecipeButton type="submit" onClick={handleSubmit}>Lägg till recept!</AddRecipeButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const LabelField = styled.label`
  margin: 4px 0;
  display: flex;
  justify-content: space-between;
`;

const InputField = styled.input`
  margin-left: 4px;
  width: 250px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #749694;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

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

const AddRecipeButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  padding: 4px;
  width: 150px;
  margin-top: 10px;
  align-self: center;
`;
