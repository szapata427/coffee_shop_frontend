import React, { Component } from 'react';
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "react-bootstrap";
import {NavLink} from 'react-router-dom'

class Header extends Component {

render() {
  return(

    <div class="ui huge menu">

    <div class="header item">
      Colombia Coffee
    </div>
    <a class="item" href="/">
      Our Products
      </a>

      <NavLink to="/seller">
        Seller Page
      </NavLink>

      <div>
      <NavLink to="/">
        Home
      </NavLink>
      </div>
      <NavLink to="/cart">
        Cart
      </NavLink>
      <NavLink to="/login">
        Login/LogOut
      </NavLink>
  </div>


  )
}


}

export default Header;
