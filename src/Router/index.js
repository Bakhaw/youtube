import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../screens/Home';
import Trending from '../screens/Trending';

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route path='/trending' component={Trending} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}
export default Router;
