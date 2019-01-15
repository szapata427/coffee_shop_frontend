import React, { Component } from 'react';
import { currentUser } from '../Store/Actions/userActions'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom'


class LoginForm extends Component {

  state ={
    user: {
      username: '',
      password: ''
    }
  }


  signInhandleChange = (event) => {
  // console.log(event.target.value)
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  signInhandleSubmit = (e) => {
    e.preventDefault()
    console.log("here", this.state.user)
    fetch(`http://localhost:3001/login`, {
    // fetch(`https://coffee-ecommerce-api.herokuapp.com/login`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        Accepts: "applicaton/json"
      },
      body: JSON.stringify({
        user: this.state.user
      })
    }).then(response => response.json())
    .then(resp => {
        if (resp.jwt) {

          console.log(resp)
          // this.setState({
          //   user: resp.user
          // })
          this.props.currentUser(resp)
          localStorage.setItem('token', resp.jwt)
          if(resp.type === "Customer") {

            this.props.history.push("/cart")
          }

          else if (resp.type === "Seller") {
            this.props.history.push("/seller")

          }

          // console.log(this.props)
        }
  })

  }

  render() {
    return(
      <React.Fragment>
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui image header">
            <div class="content">
              Log In
            </div>
          </h2>
        <form onSubmit={(e) => this.signInhandleSubmit(e)} class="ui large form" >
        <div class="ui stacked secondary segment">
          <div class="field">
            <div class="ui left icon input">
             <i class="user icon"></i>
        <input name="username" type="text" onChange={this.signInhandleChange} value={this.state.value} placeholder="Username"/>
        </div>

      <div class="field">
        <div class="ui left icon input">
         <i class="lock icon"></i>
      <input name="password" type="password" onChange={this.signInhandleChange} value={this.state.value} placeholder="Password"/>
      </div>
        </div>
         </div>
         <button class="ui green button">Log In</button>
          </div>
          <div class="ui error message"></div>
      </form>
      Not a member?<a href="http://localhost:3000/signup">  Sign Up</a>
    </div>
    </div>
    </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: (theuser) => {dispatch({type: "CURRENT_USER", payload: theuser})},
    // signInhandleChange: (userobj) => dispatch({type: "LOG_IN", payload: userobj})
  }
}



export default withRouter (connect(null, mapDispatchToProps)(LoginForm));
