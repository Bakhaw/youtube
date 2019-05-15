import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loader from '../components/Loader';
import NavBar from '../components/NavBar';

const Home = lazy(() => import('../screens/Home'));
const SearchResults = lazy(() => import('../screens/SearchResults'));
const Trending = lazy(() => import('../screens/Trending'));
const Video = lazy(() => import('../screens/Video'));

// import NavBar from '../components/NavBar';
// import Home from '../screens/Home';
// import SearchResults from '../screens/SearchResults';
// import Trending from '../screens/Trending';
// import Video from '../screens/Video';

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path='/search/:searchQuery' component={SearchResults} />
            <Route path='/watch/:videoId' component={Video} />
            <Route path='/trending' component={Trending} />
            <Route path='/' component={Home} />
          </Switch>
        </Suspense>
      </>
    </BrowserRouter>
  );
}
export default Router;
