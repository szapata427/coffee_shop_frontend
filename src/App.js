import React, { Component } from 'react';
import './App.css';
import UserForm from '../src/Components/UserForm'
import HomePage from '../src/Components/HomePage'
import Header from '../src/Components/Header'
import Cart from '../src/Components/Cart'
// import { Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, withRouter, Route } from 'react-router-dom';





class App extends Component {
  render() {

    return (
      <React.Fragment>

          <Header />
          <Switch>
          <Route path="/login" exact render={(renderProps) => (<UserForm renderProps={renderProps}/>)} />
          <Route path="/" exact render={() => (<HomePage />)} />
          <Route path="/cart" exact render={() => (<Cart />)} />
          </Switch>


      </React.Fragment>
    );
  }
}

export default withRouter(App);
