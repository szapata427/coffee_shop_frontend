import React, { Component } from 'react';
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "react-bootstrap";


class Header extends Component {

render() {
  return(
    <div class="topnav">
  <a class="active" href="/">Home</a>
  <a href="/seller">Seller</a>
  <a href="/cart">Cart</a>
  <a href="/login">LogIn</a>

</div>
  )
}


}

export default Header;
