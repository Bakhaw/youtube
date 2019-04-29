import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Link to='/trending'>Tendances</Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
