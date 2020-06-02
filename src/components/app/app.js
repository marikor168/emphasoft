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
      search: '',
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

  onSearchChange = (search) => {
    this.setState({ search });
  }

  searchUsers(users, search) {
    if(search.length === 0) {
      return users;
    }

    return users.filter((user) => {
      return user.username.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  onSortAscending = (users) => {
    return users.sort((a, b) => a.id > b.id ? 1 : -1)
  }

  onSortDescending = (users) => {
    return users.sort((a, b) => a.id < b.id ? 1 : -1)
  }

  render() {

    const { isLoggedIn, users, search } = this.state;
    const visibleUsers = this.searchUsers(users, search);

    console.log('visible', visibleUsers);
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
                onSearchChange={ this.onSearchChange }
                onSortAscending={ this.onSortAscending }
                onSortDescending={ this.onSortDescending } 
                users={ visibleUsers } />
            )} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </Router>
    );
  };
};