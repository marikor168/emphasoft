import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { users } from '../data';

import LoginForm from '../login-form';
import UsersTable from '../users-table';

import './app.css';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      users: users,
      username: 'Guest',
      password: '',
    };
  }

  onLogin = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      isLoggedIn: true,
      username: this.state.username,
      password: this.state.password,
    });
  }

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
      username: 'Guest',
      password: '',
    });
  }

  render() {

    const { isLoggedIn, users } = this.state;
    console.log(this.state);
    return(
      <Router>
        <Switch>
          <Route exact path="/login" 
            render={() => (
              <LoginForm 
                isLoggedIn={ isLoggedIn }
                onLogin={ this.onLogin }
                onUsernameChange={ this.onUsernameChange }
                onPasswordChange={ this.onPasswordChange }
              />
            )} />
          <Route exact path="/table" 
            render={() => (
              <UsersTable 
                isLoggedIn={ isLoggedIn }
                onLogout={ this.onLogout } 
                users={ users }/>
            )} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </Router>
    );
  };
};