import React, { Component } from 'react';

import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';

import './search-panel.css';
export default class SearchPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onTermChange = (event) => {
    const { onSearchChange = () => {}} = this.props;

    this.setState({
      term: event.target.value
    });

    onSearchChange(event.target.value);
  }

  render() {
    const { onLogout, onToggleModal } = this.props;
    const { term } = this.state;

    return (
      <div className="search-panel">
        <div className="buttons-wrapper">
          <TextField
              type="text"
              name="search"
              placeholder="Поиск"
              value={ term }
              onChange={ this.onTermChange }
              InputProps={{
                startAdornment: ( 
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}/>
          <IconButton onClick={ onToggleModal }>
            <AddIcon color="primary" />
          </IconButton>
        </div>

        <IconButton onClick={ onLogout }>
          <ExitToAppIcon color="primary" />
        </IconButton>
      </div>      
    );
  }
};
