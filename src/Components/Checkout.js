import React, { Component } from 'react';
import {connect} from 'react-redux';



class Checkout extends Component {

  render() {

    // console.log(this.props.cartProducts.carts)
    // console.log(this.props.currentUser)
    let productsinCart;
    let totalPriceinCart;
    if (this.props.cartProducts.carts) {
       productsinCart = this.props.cartProducts.carts.filter(product => product.user_id === this.props.currentUser.user_id)
    }

    let total = 0;
    if (productsinCart) {
    totalPriceinCart = productsinCart.forEach(product => {
      total += parseFloat(product.total_price)
    })
  }

    let totalQuantityinCart;
    let totalQuantity = 0;
    if (productsinCart) {
    totalQuantityinCart = productsinCart.forEach(product => {
      totalQuantity += parseInt(product.quantity)
    })
  }

    return(
      <div className="cart-totalinformation-container">
        <span className="cart-totalprice"> Total Price: ${total.toFixed(2)} </span>
        <p className="cart-totalprice"> Total Quantity: {totalQuantity}</p>
        {total.toFixed(2) > 49 ? <div className="free-shipping">Your Shipping is Free! </div> : <div className="free-shipping">Plus Shipping: $7 <p className="from-shipping">Only ${(49 - total.toFixed(2)).toFixed(2)} away from Free Shipping</p></div>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    cartProducts: state.cartProducts.cartProducts,
    currentUser: state.user.user
  }
}

export default connect(mapStateToProps)(Checkout);
