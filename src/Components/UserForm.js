import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import { Form } from 'semantic-ui-react';



class UserForm extends Component {

  state ={
    // username: "",
    // password: "",
    // name: "",
    user: {
      username: '',
      password: ''
    }
  }

  signUphandleChange = (event) => {
    console.log(this.state)
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  signUphandleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    console.log("submitted")
    // const newuser = this.state.user
    // this.props.createNewUser(newuser)
    fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: this.state.user
      })
    }).then(resp => resp.json())
    .then(user => {
      console.log(user)
      localStorage.setItem('token', user.jwt)
      this.setState({
        user: user
      })
      this.props.history.push("/cart")
    })
  }



componentDidMount = () => {
  let token = localStorage.getItem('token')
  console.log(token)
  if (token) {
    fetch(`http://localhost:3001/current_user`, {
      // method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: token
      }
    }).then(response => response.json())
    .then(resp => {
      console.log(resp);
      this.setState({
        user:resp
      })
      this.props.history.push("/cart")
      // this.props.renderProps.history.push("/cart")
    })



  }
  else {
    console.log('inside the else ');;
    this.props.history.push('/login')
    // push them to the route you want
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
        localStorage.setItem('token', resp.jwt)
        // console.log(this.props)
        this.props.history.push("/cart")
      }
})

}

//
// login = (e, userinfo) => {
//   console.log(userinfo)
//   fetch(`http://localhost:3001/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": 'application/json',
//       Accepts: "applicaton/json"
//     },
//     body: JSON.stringify({
//       user: userinfo
//     })
//   })
// }





render() {

  return(
    <React.Fragment>
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui image header">
          <div class="content">
            Sign Up
          </div>
        </h2>
      <form onSubmit={this.signUphandleSubmit} class="ui large form" >
      <div class="ui stacked secondary segment">
        <div class="field">
          <div class="ui left icon input">
           <i class="user icon"></i>
    <input name="username" type="text" onChange={this.signUphandleChange} value={this.state.value} placeholder="Username"/>
    </div>
    <div class="field">
      <div class="ui left icon input">
       <i class="lock icon"></i>
    <input name="password" type="text" onChange={this.signUphandleChange} value={this.state.value} placeholder="Password"/>
       </div>
       </div>
     </div>
       <button class="ui green button">Sign Up</button>
        </div>
        <div class="ui error message"></div>
    </form>

  </div>
  </div>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui image header">
        <div class="content">
          Sign -in to your account
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
  <input name="password" type="text" onChange={this.signInhandleChange} value={this.state.value} placeholder="Password"/>
  </div>
    </div>
     </div>
     <button class="ui green button">Log In</button>
      </div>
      <div class="ui error message"></div>
  </form>
</div>
</div>
</React.Fragment>

  )
}

}

// const mapStateToProps = (state) => {
//   return {
//     user: this.state.user
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createNewUser: (newuser) => {dispatch({type: "NEW_USER", payload: newuser})},
//     // signInhandleChange: (userobj) => dispatch({type: "LOG_IN", payload: userobj})
//   }
// }


// const connectedContainer = connect(null, mapDispatchToProps)(UserForm)
// const RoutedContainer = withRouter(connectedContainer)
// export default RoutedContainer
export default withRouter(UserForm);
