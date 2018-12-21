import React, { Component } from 'react';
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteUser } from '../Store/Actions/userActions'

class Header extends Component {

  deleteToken = () => {
    localStorage.removeItem('token')
    this.props.deleteUser()
  }
render() {


// console.log(this.props.currentUser)
  return(

  <div class="ui huge menu">

    <div className="ui item" style={{color: "red"}}>
      Colombia Coffee
    </div>

    <div className="ui item">
      <NavLink to="/"style={{width: "100px", color: "white"}}>
        Products
      </NavLink>
    </div>
    <div className="ui item">
      {this.props.currentUser.type === "Customer" ? <NavLink to="/cart" style={{width: "100px", color: "white"}}>
        Cart
      </NavLink> : null}
    </div>
      <div className="right menu">
         <div className="ui item">
           <NavLink to="/login" style={{width: "100px", color: "white"}}>
             Log-in
           </NavLink>
         </div>

       <div className="ui item">
      <NavLink to="/signup" style={{width: "100px", color: "white"}}>
        Sign-up
      </NavLink>
    </div>
    <div className="ui item">
      {this.props.currentUser? <NavLink to="/signUp" onClick={this.deleteToken}style={{width: "100px", color: "white"}}>
        Log Out
      </NavLink> : null}
    </div>
    <div className="ui item">
    { this.props.currentUser.type === "Seller" ? <NavLink to="/seller" style={{width: "100px", color: "white"}}>
        Seller Page
      </NavLink>: null}
    </div>
  </div>
  </div>


  )
}


}

const mapStateToProps = state => {
  // console.log(state.user.user)
  return {
    currentUser: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: () => dispatch({type: "DELETE_USER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
