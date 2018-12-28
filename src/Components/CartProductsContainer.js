import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { deletedCart } from '../Store/Actions/cartActions'
import Checkout from './Checkout'


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
      <div>

      {this.props.productCart?
    <React.Fragment>
      <div>
      <p>{this.props.productCart.name}</p>
        <p> Quantity: {this.props.productCart.quantity}</p>
        <p>Price per Item: ${this.props.productCart["total_price"]}</p>
        <p>Total Price: ${this.props.productCart.quantity * this.props.productCart["total_price"]} </p>
        <button class="delete-button" onClick={(event) => this.deleteCart(event, this.props.productCart)}>Delete</button>
      </div>
    </React.Fragment>

: null}
  <Checkout theCarts={this.props.productCart} />
    </div>


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
