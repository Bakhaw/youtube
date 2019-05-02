import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../screens/Home';
import SearchResults from '../screens/SearchResults';
import Trending from '../screens/Trending';
import Video from '../screens/Video';

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route path='/search' component={SearchResults} />
          <Route path='/watch/:videoId' component={Video} />
          <Route path='/trending' component={Trending} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}
export default Router;
