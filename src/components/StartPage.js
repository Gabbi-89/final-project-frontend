import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components/macro';

import { theme } from 'styling/theme';
import { Wrapper } from 'styling/wrapper';
import { SectionHeading, Weekday } from 'styling/headings';

import { Loader } from './Loader';

export const StartPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for the meals
  const [randomMealMon, setRandomMealMon] = useState();
  const [randomMealTue, setRandomMealTue] = useState();
  const [randomMealWed, setRandomMealWed] = useState();
  const [randomMealThu, setRandomMealThu] = useState();

  // State for the ingredients 
  const [ingredientsMon, setRandomIngredientsMon] = useState([]);
  const [ingredientsTue, setRandomIngredientsTue] = useState([]);
  const [ingredientsWed, setRandomIngredientsWed] = useState([]);
  const [ingredientsThu, setRandomIngredientsThu] = useState([]);

  // State for the id
  const [idMon, setIdMon] = useState();
  const [idTue, setIdTue] = useState();
  const [idWed, setIdWed] = useState();
  const [idThu, setIdThu] = useState();

  // GET request to get all recipes
  const RECIPE_URL = 'https://recept-api.herokuapp.com/recipes';

  useEffect(() => {
    fetch(RECIPE_URL)
      .then((res) => res.json())
      .then((json) => {
        setRecipes(json)
        setLoading(false);
      })
  }, []);

  const onClickRandomMeal = () => {
    const randomMealMon = recipes[Math.floor(Math.random() * recipes.length)];
    setRandomMealMon(randomMealMon.meal);
    const ingredientsMon = randomMealMon.ingredients;
    setRandomIngredientsMon(ingredientsMon);
    console.log(ingredientsMon)
    const idMon = randomMealMon._id;
    setIdMon(idMon);

    const randomMealTue = recipes[Math.floor(Math.random() * recipes.length)];
    setRandomMealTue(randomMealTue.meal);
    const ingredientsTue = randomMealTue.ingredients;
    setRandomIngredientsTue(ingredientsTue);
    const idTue = randomMealTue._id;
    setIdTue(idTue);

    const randomMealWed = recipes[Math.floor(Math.random() * recipes.length)];
    setRandomMealWed(randomMealWed.meal);
    const ingredientsWed = randomMealWed.ingredients;
    setRandomIngredientsWed(ingredientsWed);
    const idWed = randomMealWed._id;
    setIdWed(idWed);

    const randomMealThu = recipes[Math.floor(Math.random() * recipes.length)];
    setRandomMealThu(randomMealThu.meal);
    const ingredientsThu = randomMealThu.ingredients;
    setRandomIngredientsThu(ingredientsThu);
    const idThu = randomMealThu._id;
    setIdThu(idThu);
  }

  if (loading) {
    return <Loader />
  } else {
    return (
      <Section>
        {recipes && (
          <>
            <RandomizerButton type='button' onClick={onClickRandomMeal}>
              Sätt veckans måltider!
            </RandomizerButton>
            {ingredientsMon.length > 0 && (
              <WeekWrapper>
                <Wrapper>
                  <SectionHeading>Veckans meny:</SectionHeading>
                  <DayWrapper>
                    <Weekday>Måndag: </Weekday>
                    <Link to={`/recipes/${idMon}`} className="recipe-link">
                      <RandomMeal>{randomMealMon}</RandomMeal>
                    </Link>
                  </DayWrapper>
                  <DayWrapper>
                    <Weekday>Tisdag: </Weekday>
                    <Link to={`/recipes/${idTue}`} className="recipe-link">
                      <RandomMeal>{randomMealTue}</RandomMeal>
                    </Link>
                  </DayWrapper>
                  <DayWrapper>
                    <Weekday>Onsdag: </Weekday>
                    <Link to={`/recipes/${idWed}`} className="recipe-link">
                      <RandomMeal>{randomMealWed}</RandomMeal>
                    </Link>
                  </DayWrapper>
                  <DayWrapper>
                    <Weekday>Torsdag: </Weekday>
                    <Link to={`/recipes/${idThu}`} className="recipe-link">
                      <RandomMeal>{randomMealThu}</RandomMeal>
                    </Link>
                  </DayWrapper>
                </Wrapper>
                <Wrapper>
                  <SectionHeading>Att inhandla för veckan:</SectionHeading>
                  {ingredientsMon && (
                    <IngredientsListElement key={ingredientsMon[0]}>{ingredientsMon.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                    </IngredientsListElement>
                  )}
                  {ingredientsTue && (
                    <IngredientsListElement key={ingredientsTue[1]}>{ingredientsTue.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                    </IngredientsListElement>
                  )}
                  {ingredientsWed && (
                    <IngredientsListElement key={ingredientsWed[0]}>{ingredientsWed.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                    </IngredientsListElement>
                  )}
                  {ingredientsThu && (
                    <IngredientsListElement key={ingredientsThu[0]}>{ingredientsThu.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                    </IngredientsListElement>
                  )}
                </Wrapper>
              </WeekWrapper>
            )}
          </>
        )}
      </Section>
    )
  }
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RandomizerButton = styled.button`
  cursor: pointer;
  align-self: center;
  border-radius: 8px;
  border: none;
  padding: 10px;
  font-size: 22px;
  width: 250px;
  font-family: ${theme.fonts.mainfont};
  background: ${theme.colors.dark};
  color: ${theme.colors.white};

  :hover {
    background: ${theme.colors.shadow};
  }
`;

const WeekWrapper = styled.div`
@media(min-width: 1023px) {
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin-top: 40px;
}
`;

const DayWrapper = styled.div`
  display: flex;
  font-size: 14px;
  text-align: center;
  margin: 0;
`;

const RandomMeal = styled.p`
  text-transform: none;
  font-size: 14px;
  margin-right: 6px;
`;

const IngredientsListElement = styled.ul`
  margin: 0;
`;