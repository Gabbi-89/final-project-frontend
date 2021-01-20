import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from 'components/Header';
import { StartPage } from 'components/StartPage';
import { Recipes } from 'components/Recipes';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <StartPage />
        </Route>
        <Route path='/recept'>
          <Recipes />
        </Route>
        <Redirect path='/404' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
