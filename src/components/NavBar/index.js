import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

function NavBar() {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Link to='/trending'>Tendances</Link>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
