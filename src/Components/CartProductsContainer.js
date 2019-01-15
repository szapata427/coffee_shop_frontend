import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { deletedCart } from '../Store/Actions/cartActions'
// import Checkout from './Checkout'


class CartProductsContainer extends Component {

  state = {
    count: 0
  }

  deleteCart = (e, cart) => {
    console.log(cart)
    const cartId = cart.id
    this.props.deletedCart(cart)

    fetch(`http://localhost:3001/carts/${cartId}`, {
    // fetch(`https://coffee-ecommerce-api.herokuapp.com/carts/${cartId}`, {
      method: "delete"
    })
  }

componentDidMount() {
  this.setState({
    count: this.props.productCart.quantity
  })
}

minusQuantity = (cart) => {
  // console.log(cart)
  this.setState({
    count: --this.state.count
  })

  let updatedQuantity = this.state.count.toString()
  // console.log(updatedQuantity)

  fetch(`http://localhost:3001/carts/${cart.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      quantity: updatedQuantity
    })
  }).then(response => response.json())
  .then(resp => console.log(resp))
}

plusQuantity = (cart) => {
  console.log(cart)
  this.setState({
    count: ++this.state.count
  }, () => console.log(this.state))

  let addingOne = this.state.count.toString()
  console.log(addingOne)

  fetch(`http://localhost:3001/carts/${cart.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      quantity: addingOne
    })
  }).then(response => response.json())
  .then(resp => console.log(resp))





}



  render() {
    // console.log(this.props.productCart)
    return(
      <React.Fragment>

      {this.props.productCart.length != 0 ?
    <React.Fragment>
      <div class="cart-page-main-container">
        <div class="secondary-cart-container">
      <p class="cart-page-name">{this.props.productCart.name}</p>
      <img class="cart-page-image"src={this.props.productCart.image}/>
        <p class="cart-page-quantity"> Quantity: {this.props.productCart.quantity}</p>
        <p class="cart-page-price-per-item">Price per Item: ${parseInt(this.props.productCart["total_price"]/ this.props.productCart.quantity).toFixed(2)}</p>
        <p class="cart-page-totalprice">Total Price: ${parseInt(this.props.productCart["total_price"]).toFixed(2)} </p>
        <button className="minus-cart-button" onClick={() => this.minusQuantity(this.props.productCart)}>-</button>
        <div className="cart-quantity-form">{this.state.count}</div>
        <button className="plus-cart-button" onClick={() => this.plusQuantity(this.props.productCart)} >+</button>
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
