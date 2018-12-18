import React, { Component } from 'react';
import './App.css';
import UserForm from '../src/Components/UserForm'
import SignUpForm from '../src/Components/SignUpForm'
import HomePage from '../src/Components/HomePage'
import Header from '../src/Components/Header'
import Cart from '../src/Components/Cart'
import SellerPage from '../src/Components/SellerPage'
import LoginForm from '../src/Components/LogInForm'

// import { Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'


// componentDidMount = () => {
//   let token = localStorage.getItem('token')
//   console.log(token)
//   if (token) {
//     fetch(`http://localhost:3001/current_user`, {
//       // method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accepts: "application/json",
//         Authorization: token
//       }
//     }).then(response => response.json())
//     .then(resp => {
//       console.log(resp);
//       this.setState({
//         user:resp
//       })
//       this.props.history.push("/cart")
//       // this.props.renderProps.history.push("/cart")
//     })
//
//
//
//   }
//   else {
//     console.log('inside the else ');;
//     this.props.history.push('/login')
//     // push them to the route you want
//   }
// }




class App extends Component {
  render() {

    return (
      <React.Fragment>

          <Header />
          <Switch>
          <Route path="/login" exact render={(renderProps) => (<LoginForm renderProps={renderProps}/>)} />
          <Route path="/signup" exact render={(renderProps) => (<SignUpForm renderProps={renderProps}/>)} />
          <Route path="/" exact render={() => (<HomePage />)} />
          <Route path="/cart" exact render={(renderProps) => (<Cart />)} />
          <Route path="/seller" exact render={() => (<SellerPage />)} />
          </Switch>


      </React.Fragment>
    );
  }
}

export default withRouter(App);
