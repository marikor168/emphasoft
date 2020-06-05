import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LoginForm from '../login-form';
import UsersTable from '../users-table';
import Spinner from '../spinner';
import { isUserValid, isPassValid } from '../../utils/utils.js';

import './app.css';
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      password: '',
      usernameValid: true,
      passwordValid: true,
    };
  }

  onLogin = async (event) => {
    event.preventDefault();

    if (this.state.usernameValid === false || this.state.passwordValid === false)
    return;

    this.setState({
      isLoggedIn: true,
      username: this.state.username,
      password: this.state.password,
      usernameValid: isUserValid(this.state.username),
      passwordValid: isPassValid(this.state.password),
    });
  }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
      username: '',
      password: '',
    });
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

  componentDidMount() {
    this.setState({isLoading: false});
  }

  render() {
    const { isLoggedIn,  
      usernameValid, passwordValid 
    } = this.state;
      
    if (this.state.isLoading !== false) {
      return <Spinner />
    } else {
      return(
        <Router>
          <Switch>
            <Route exact path="/" 
              render={() => {
                if (!isLoggedIn) {
                return (
                  <LoginForm 
                    onLogin={ this.onLogin }
                    onUsernameChange={ this.onUsernameChange }
                    onPasswordChange={ this.onPasswordChange } 
                    usernameValid={ usernameValid }
                    passwordValid={ passwordValid } 
                    /> )
                } else {
                  return <Redirect to="/table" />
                } 
              }} />
            <Route exact path="/table" 
              render={() => {
                if(isLoggedIn) {
                  return <UsersTable onLogout={ this.onLogout } />
                } else {
                  return <Redirect to="/" />
                }
              }} />
          </Switch>
        </Router>
      );
    }
  };
};