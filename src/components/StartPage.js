import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components/macro';

import { Wrapper } from 'styling/wrapper';
import { SectionHeading } from 'styling/headings';

export const StartPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [randomMealMon, setRandomMealMon] = useState();
  const [randomMealTue, setRandomMealTue] = useState();
  const [randomMealWed, setRandomMealWed] = useState();
  const [randomMealThu, setRandomMealThu] = useState();
  const [ingredientsMon, setRandomIngredientsMon] = useState([]);
  const [ingredientsTue, setRandomIngredientsTue] = useState([]);
  const [ingredientsWed, setRandomIngredientsWed] = useState([]);
  const [ingredientsThu, setRandomIngredientsThu] = useState([]);
  const [idMon, setIdMon] = useState();
  const [idTue, setIdTue] = useState();
  const [idWed, setIdWed] = useState();
  const [idThu, setIdThu] = useState();

  // GET request to get all recipes
  const RECIPE_URL = 'https://recept-api.herokuapp.com/recipes';

  useEffect(() => {
    fetch(RECIPE_URL)
      .then(res => res.json())
      .then(json => {
        setRecipes(json)
      })
  }, []);

  const arrayWithRecipes = recipes;

  const onClickRandomMeal = () => {
    const randomMealMon = arrayWithRecipes[Math.floor(Math.random() * arrayWithRecipes.length)];
    setRandomMealMon(randomMealMon.meal);
    const ingredientsMon = randomMealMon.ingredients;
    setRandomIngredientsMon(ingredientsMon);
    const idMon = randomMealMon._id;
    setIdMon(idMon);

    const randomMealTue = arrayWithRecipes[Math.floor(Math.random() * arrayWithRecipes.length)];
    setRandomMealTue(randomMealTue.meal);
    const ingredientsTue = randomMealTue.ingredients;
    setRandomIngredientsTue(ingredientsTue);
    const idTue = randomMealTue._id;
    setIdTue(idTue);

    const randomMealWed = arrayWithRecipes[Math.floor(Math.random() * arrayWithRecipes.length)];
    setRandomMealWed(randomMealWed.meal);
    const ingredientsWed = randomMealWed.ingredients;
    setRandomIngredientsWed(ingredientsWed);
    const idWed = randomMealWed._id;
    setIdWed(idWed);

    const randomMealThu = arrayWithRecipes[Math.floor(Math.random() * arrayWithRecipes.length)];
    setRandomMealThu(randomMealThu.meal);
    const ingredientsThu = randomMealThu.ingredients;
    setRandomIngredientsThu(ingredientsThu);
    const idThu = randomMealThu._id;
    setIdThu(idThu);
  }

  return (
    <Section>
      <RandomizerButton type='button' onClick={onClickRandomMeal}>
        Sätt veckans måltider!
      </RandomizerButton>
      {ingredientsMon.length > 0 && (
        <WeekWrapper>
          <Wrapper>
            <SectionHeading>Veckans meny:</SectionHeading>
            <SectionHeading>Måndag:  <Link to={`/recipes/${idMon}`} className="recipe-link">
              <RandomMeal>{randomMealMon}</RandomMeal>
            </Link></SectionHeading>
            <SectionHeading>Tisdag: <Link to={`/recipes/${idTue}`} className="recipe-link">
              <RandomMeal>{randomMealTue}</RandomMeal>
            </Link></SectionHeading>
            <SectionHeading>Onsdag: <Link to={`/recipes/${idWed}`} className="recipe-link">
              <RandomMeal>{randomMealWed}</RandomMeal>
            </Link></SectionHeading>
            <SectionHeading>Torsdag: <Link to={`/recipes/${idThu}`} className="recipe-link">
              <RandomMeal>{randomMealThu}</RandomMeal>
            </Link></SectionHeading>
          </Wrapper>
          <Wrapper>
            <SectionHeading>Att inhandla för veckan:</SectionHeading>
            <RandomMeal>{ingredientsMon}{ingredientsTue}{ingredientsWed}{ingredientsThu}</RandomMeal>
          </Wrapper>
        </WeekWrapper>
      )}
    </Section >
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

const RandomMeal = styled.span`
  text-transform: none;
`;