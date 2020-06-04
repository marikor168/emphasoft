import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LoginForm from '../login-form';
import UsersTable from '../users-table';
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

    let response = await fetch("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
        method: "GET",
        headers: {
              'Authorization': `Token ${this.token}`,
            },
        });

    let users = await response.json();
    let isUserExistsAndCredsValid = users.some(user => {
      return user.username === this.state.username
    });

    // let users = 
    // getAllUsers(this.token)
    // .then(data => this.users = data)
    // console.log("UUUUUSSSERS", this.users);
    if (isUserExistsAndCredsValid) {
    
    this.setState({
      isLoggedIn: true,
      username: this.state.username,
      password: this.state.password,
      usernameValid: isUserValid(this.state.username),
      passwordValid: isPassValid(this.state.password),
    });
  } else {
    alert("WRONG USER SSSSKA")
  }
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
    fetch("http://emphasoft-test-assignment.herokuapp.com/api-token-auth/", {
      method: "POST",
      body: JSON.stringify({username: "test_super", password: "Nf<U4f<rDbtDxAPn"}),
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      }).then(response => response.json())
      .then(data => {
        this.token = data.token;
        this.setState({isLoading: false})
      }
    );
  }

  render() {
    const { isLoggedIn,  
      usernameValid, passwordValid 
    } = this.state;
      
    if (this.state.isLoading !== false) {
      return <h1>Loading</h1>
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
                    passwordValid={ passwordValid } /> )
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

async function getToken() {
  fetch("http://emphasoft-test-assignment.herokuapp.com/api-token-auth/", {
    method: "POST",
    body: JSON.stringify({username: "test_super", password: "Nf<U4f<rDbtDxAPn"}),
    headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    }).then(response => response.json())
      .then(data => this.token = data.token
  );
}

async function getAllUsers(token) {
  console.log("TOOOO<E", token)
  // let users ;

  let promise =  await fetch("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
  method: "GET",
  headers: {
        'Authorization': `Token ${token}`,
      },
  })
  
 let users = await promise.json()
  // .then(data => {
  //   users = data
  // })
  // console.log(":DADAD", users)
  return users;

}