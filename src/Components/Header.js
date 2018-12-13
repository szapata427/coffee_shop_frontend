import React, { Component } from 'react';
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "react-bootstrap";


class Header extends Component {

render() {
  return(
    <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="/">Home</a>
  <a href="/login">LogIn</a>
  <a href="#about">About</a>
</div>
  )
}


}

export default Header;
