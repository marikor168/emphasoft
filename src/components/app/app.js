import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginForm from '../login-form';
import UsersTable from '../users-table';

import './app.css';

const App = () => {
  
  return(
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
  <Route exact path="/table" component={UsersTable} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </Router>
  );
};

export default App;
