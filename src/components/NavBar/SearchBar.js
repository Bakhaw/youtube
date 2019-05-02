import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

import { AppContext } from '../../context';
import API from '../../api';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    background: '#eee',
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
};

function SearchBar({ classes, history }) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  const { setSearchResults } = useContext(AppContext);
  async function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.length === 0) return;

    const data = await API.searchByQuery(inputValue);
    await setSearchResults(data);
    history.push('/search');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Paper className={classes.root} elevation={1}>
        <InputBase
          className={classes.input}
          onChange={handleInputChange}
          placeholder='Search YouTube'
          value={inputValue}
        />
        <IconButton
          aria-label='Search'
          className={classes.iconButton}
          onClick={handleSubmit}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
}

export default withStyles(styles)(withRouter(SearchBar));
