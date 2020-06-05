import React, { Component } from 'react';
import { isUserValid, isPassValid } from '../../utils/utils';

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
      usernameValid: true,
      passwordValid: true,
    }
  }

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
      usernameValid: isUserValid(event.target.value),
    });
  }

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
      passwordValid: isPassValid(event.target.value),
    });
  }  

  onSubmitHandle = (event) => {
    event.preventDefault();

    const {usernameValid, passwordValid} = this.state;
    this.props.onLogin(usernameValid, passwordValid);
  }

  render() {

    const { classes } = this.props;
    const { username, password, usernameValid, passwordValid } = this.state;
  
    return (
      <div className="login-form__wrapper">
        <Paper elevation={22} className="login-form__paper">
          <h1 className="login-form__title">Авторизация</h1>
          <form className="login-form" onSubmit={ this.onSubmitHandle }>
            <TextField
              className={ classes.margin }
              type="text"
              name="username"
              value={ username }
              onChange={ this.onUsernameChange }
              placeholder="Пользователь"
              required 
              error = { !usernameValid }
              helperText = { !usernameValid && 'Incorrect input' }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                ),
              }}/>          
            <TextField  
              className={ classes.margin }
              type="password"
              name="password"
              value={ password }
              onChange={ this.onPasswordChange }
              placeholder="Пароль"
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
              className={ classes.button }
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