import React, { Component } from 'react';
import {connect} from 'react-redux';


class CartProductsContainer extends Component {

  render() {
    return(
      <div>
      {this.props.productCart.name}
      </div>
    )
  }
}

export default CartProductsContainer;
