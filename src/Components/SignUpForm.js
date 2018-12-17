//
// import React, { Component } from 'react';
//
// class SignUpForm extends Component {
//   state = {
//     username: '',
//     password: ''
//   }
//
//   handleSignupChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
//
//   render() {
//     return (
//       <div className="mainWrapper">
//         <h1>Sign Up</h1>
//         <div className="ui segment appForm">
//           <form
//             className="ui form"
//             onSubmit={(e) => this.props.signupFormSubmit(e, this.state)}>
//             <div className="field">
//               <label> Username </label>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="username"
//                 value={this.state.username}
//                 onChange={(e) => this.handleSignupChange(e)}/>
//             </div>
//             <div className="field">
//               <label> Password </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 value={this.state.password}
//                 onChange={(e) => this.handleSignupChange(e)}/>
//             </div>
//             <button className="fluid ui button">Create new account</button>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default SignUpForm;
