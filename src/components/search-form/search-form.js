import React from 'react';

import { 
  TextField,
  InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import './search-form.css';

const SearchForm = ({ onLogout }) => {
  return (
    <form className="search-form">
      <TextField
          type="text"
          name="search"
          placeholder="Поиск"
          InputProps={{
            startAdornment: ( 
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}/>
        <IconButton onClick={ onLogout }>
          <ExitToAppIcon color="primary" />
        </IconButton>
    </form>
  );
};

export default SearchForm;