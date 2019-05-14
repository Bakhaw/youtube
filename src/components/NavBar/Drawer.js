import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import Svg from '../Svg';

const listItems = [
  {
    icon: 'home',
    linkTo: '/',
    text: 'Home'
  },
  {
    icon: 'trending',
    linkTo: '/trending',
    text: 'Trending'
  }
];

const ListWrapper = styled.div`
  width: 240px;
`;

function Drawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = open => () => {
    setOpen(open);
  };

  return (
    <div className='Drawer'>
      <IconButton onClick={toggleDrawer(true)}>
        <Svg type='menu' />
      </IconButton>
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <ListWrapper
          tabIndex={0}
          role='button'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {listItems.map((item, index) => (
              <Link key={index} to={item.linkTo}>
                <ListItem button>
                  <Svg type={item.icon} />
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </ListWrapper>
      </SwipeableDrawer>
    </div>
  );
}

export default Drawer;
