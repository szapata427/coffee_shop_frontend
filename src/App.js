import React, { Component } from 'react';
import './App.css';
import UserForm from '../src/Components/UserForm'
import HomePage from '../src/Components/HomePage'
import Header from '../src/Components/HomePage'
import { Route, Switch, withRouter } from "react-router-dom";




class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/signup" exact render={() => (<UserForm />)} />
          <Route path="/home" exact render={() => (<HomePage />)} />
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
