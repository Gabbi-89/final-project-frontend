import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { combineReducers, createStore } from '@reduxjs/toolkit';

import styled from 'styled-components/macro';

import { meals } from 'reducer/meals';
import { Header } from 'components/Header';
import { StartPage } from 'components/StartPage';
import { Recipes } from 'components/Recipes';
import { Recipe } from 'components/Recipe';
import { Footer } from 'components/Footer';

import { theme } from 'styling/theme';

const reducer = combineReducers({
  meals: meals.reducer
});

// Retrieves the localStorage and use it as the initial state
const persistedStateJSON = localStorage.getItem('weekly-plan');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// Creates the store using initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Stores the state in localStorage on any change in the redux state
store.subscribe(() => {
  localStorage.setItem('weekly-plan', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Switch>
          <Route path='/' exact>
            <StartPage />
          </Route>
          <Route path='/recept'>
            <Recipes />
          </Route>
          <Route path='/recipes/:_id'>
            <Recipe />
          </Route>
          <Redirect path='/404' />
        </Switch>
      </MainContainer>
      <Footer />
    </BrowserRouter>
  );
};

const MainContainer = styled.section`
  background: ${theme.colors.white};
  box-shadow: 1px 1px 8px ${theme.colors.shadow};
  margin: 20px;
  padding: 20px 10px;
`;