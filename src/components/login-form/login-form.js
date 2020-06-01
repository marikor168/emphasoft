import React from 'react';

import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import {
  Button,
  TextField,
  InputAdornment,
  Paper
 } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';

import './login-form.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1.5),
  },
  button: {
    margin: theme.spacing(3),
  }
}));

const LoginForm = () => {

  const classes = useStyles();

  return (
    <Paper elevation={22} className="login-form__wrapper">
        <h1 className="login-form__title">Авторизация</h1>
        <form className="login-form">
          <TextField
            className={classes.margin}
            type="text"
            name="username"
            placeholder="Пользователь"
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
            required 
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
  );
};

export default LoginForm;