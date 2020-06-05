import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import {
  Button,
  TextField,
  InputAdornment,
  Paper
 } from '@material-ui/core';
 import { withStyles } from '@material-ui/core/styles';

import './login-form.css';

const styles = theme => ({
  margin: {
    margin: theme.spacing(1.5),
  },
  button: {
    margin: theme.spacing(3),
  },
});

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    const { isLoggedIn, 
      onLogin, 
      onUsernameChange, onPasswordChange, 
      usernameValid, passwordValid 
    } = this.props;

    const { classes } = this.props;
  
    if(isLoggedIn) {
      return <Redirect to="/table" />
    }
  
    return (
      <div className="login-form__wrapper">
        <Paper elevation={22} className="login-form__paper">
          <h1 className="login-form__title">Авторизация</h1>
          <form className="login-form" onSubmit={ onLogin }>
            <TextField
              className={classes.margin}
              type="text"
              name="username"
              placeholder="Пользователь"
              error = { !usernameValid }
              helperText = { !usernameValid && 'Incorrect input' }
              onChange={ onUsernameChange }
              required 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                ),
              }}/>          
            <TextField  
              className={classes.margin}
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={ onPasswordChange }
              required 
              error = { !passwordValid }
              helperText = { !passwordValid && 'Incorrect input'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="primary"/>
                  </InputAdornment>
                ),
              }}/>
  
            <Button 
              className={classes.button}
              color="primary" 
              variant="contained" 
              type="submit">Войти</Button>
          </form>
        </Paper>
      </div>  
    );
  };
};

export default withStyles(styles)(LoginForm);