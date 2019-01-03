import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { deletedCart } from '../Store/Actions/cartActions'
// import Checkout from './Checkout'


class CartProductsContainer extends Component {

  deleteCart = (e, cart) => {
    console.log(cart)
    const cartId = cart.id
    this.props.deletedCart(cart)

    fetch(`http://localhost:3001/carts/${cartId}`, {
      method: "delete"
    })
  }




  render() {
    // console.log(this.props.productCart)
    return(
      <React.Fragment>

      {this.props.productCart ?
    <React.Fragment>
      <div class="cart-page-main-container">
        <div class="secondary-cart-container">
      <p class="cart-page-name">{this.props.productCart.name}</p>
      <img class="cart-page-image"src={this.props.productCart.image}/>
        <p class="cart-page-quantity"> Quantity: {this.props.productCart.quantity}</p>
        <p class="cart-page-price-per-item">Price per Item: ${this.props.productCart["total_price"] / this.props.productCart.quantity}</p>
        <p class="cart-page-totalprice">Total Price: ${this.props.productCart["total_price"]} </p>
        <button class="cart-delete-button" onClick={(event) => this.deleteCart(event, this.props.productCart)}>Delete</button>
        </div>
    </div>
    </React.Fragment>

: <div>Your Cart is Currently Empty</div>}

    </React.Fragment>


    )
  }

}

const mapStateToProps = ({user}) => {
  return {
    currentUser: user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletedCart: (cart) => dispatch(deletedCart(cart))
  }
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(CartProductsContainer));
