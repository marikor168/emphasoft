import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LoginForm from '../login-form';
import UsersTable from '../users-table';

import './app.css';
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  onLogin = (usernameValid, passwordValid) => {
    // the user can't go to the page with Table until username and password not valid
    if (usernameValid === false || passwordValid === false)
    return;

    this.setState({
      isLoggedIn: true,
    });
  }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    const { isLoggedIn } = this.state;
      
    return(
      <Router>
        <Switch>          
          <Route exact path="/table" 
            render={() => {
              if(isLoggedIn) {
                return <UsersTable onLogout={ this.onLogout } />
              } else {
                return <Redirect to="/" />
              }
            }} />
          <Route path="/" 
            render={() => {
              if (!isLoggedIn) {
                return <LoginForm onLogin={ this.onLogin } />
              } else {
                return <Redirect to="/table" />
              } 
            }} />
        </Switch>
      </Router>
    );
  };
};