import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';



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
  console.log(this.state.user)
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
        this.setState({
        })
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
    <div>
    <br></br>
    Sign Up
    <br></br>
    <br></br>
    <form onSubmit={this.signUphandleSubmit}>
    username
    <input name="username" type="text" onChange={this.signUphandleChange} value={this.state.value}/>
    password
    <input name="password" type="text" onChange={this.signUphandleChange} value={this.state.value}/>
    <button>Submit</button>
    </form>
    <br></br>
    <label>Sign In</label>
    <br></br>
    <br></br>
    <form onSubmit={(e) => this.signInhandleSubmit(e)}>
    Username
    <input name="username" type="text" onChange={this.signInhandleChange} value={this.state.value}/>
    password
    <input name="password" type="text" onChange={this.signInhandleChange} value={this.state.value}/>
    <button>LogIn</button>

    </form>


    </div>
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
