import React, { useState, useEffect } from 'react';

import styled from 'styled-components/macro';

import { Wrapper } from 'styling/wrapper';
import { SectionHeading } from 'styling/headings';

export const StartPage = () => {
  const [recipes, setRecipes] = useState([]);

  // GET request to get all recipes
  const RECIPE_URL = 'http://localhost:8080/recipes';

  useEffect(() => {
    fetch(RECIPE_URL)
      .then(res => res.json())
      .then(json => {
        setRecipes(json)
        console.log(json)
      })
  }, []);

  const array = recipes;
  console.log(`This is my array: ${array}`)
  const arrayWithMeals = recipes.map(recipe => recipe.meal);

  console.log(`My array of meals: ${arrayWithMeals}`);
  console.log(typeof (arrayWithMeals))
  // const randomMeal = myArray[Math.floor(Math.random() * myArray.length)];
  // console.log(`Random meal: ${meal.meal}`);


  return (
    <Section>
      <RandomizerButton>Sätt veckans måltider!</RandomizerButton>
      {/* Randomize function to be added */}
      <WeekWrapper>
        <Wrapper>
          <SectionHeading>Måndag:</SectionHeading>
          <SectionHeading>Tisdag:</SectionHeading>
          <SectionHeading>Onsdag:</SectionHeading>
          <SectionHeading>Torsdag:</SectionHeading>
        </Wrapper>
        <Wrapper>
          <SectionHeading>Att inhandla för veckan:</SectionHeading>
        </Wrapper>
      </WeekWrapper>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WeekWrapper = styled.div`
@media (min-width: 1023px) {
  display: flex;
  justify-content: center;
  width: 900px;
  margin-top: 40px;
}
`;

const RandomizerButton = styled.button`
  cursor: pointer;
  align-self: center;
  border-radius: 8px;
  border: none;
  padding: 10px;
  font-size: 22px;
  width: 250px;
  font-family: 'Roboto', sans-serif;

  :hover {
    background: pink;
  }
`;
