import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCart } from '../Store/Actions/cartActions'
import CartProductsContainer from './CartProductsContainer'
import {withRouter} from 'react-router-dom'
import  { cartOrdered }  from '../Store/Actions/cartActions'



class Cart extends Component {


  componentDidMount() {

    let token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      fetch(`http://localhost:3001/current_user`, {
        // method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: token
        }
      }).then(response => response.json())
      .then(resp => {
        console.log(resp);

        this.props.fetchCart()
        // this.props.renderProps.history.push("/cart")
      })



    }
    else {

      this.props.history.push('/login')
      // push them to the route you want
    }

  }

  cartCheckout = (e, carts) => {
    // console.log(this.props.allProducts)
     let cartFiltered = this.props.cartProducts.carts.filter(cart =>  cart.user_id === this.props.user.user_id)
     let orderedCarts = cartFiltered.map(cart =>
     { cart.ordered = ( cart.ordered === false ? true : false)
       return cart

     })

     this.props.cartOrdered()

     orderedCarts.forEach(cart => {
       return fetch(`http://localhost:3001/carts/${cart.id}`, {
         method: "PATCH",
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json"
         },
         body: JSON.stringify({
           ordered: cart.ordered
         })
       }).then(response => response.json())
       .then(resp => {
         // console.log(resp)
       })
     })

     let cartArray = []
     let productArray = []

     let theProducts = this.props.allProducts
     let subtractQuantity = theProducts.map(product => {
       orderedCarts.map(cart => {
         // console.log(cart, product)
      if (cart.product_id == product.id) {
        console.log(cart, product)
        cartArray.push(cart)
        productArray.push(product)
      }
       })
     })

  let productQty;
  let cartQty;

  cartArray.forEach(cart => {
    productArray.forEach(product => {
      if(product.id === cart.product_id) {
        productQty = product.quantity
        cartQty = cart.quantity
        let quantityRemaining = productQty - cartQty
        console.log(quantityRemaining)

        return fetch(`http://localhost:3001/products/${product.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            quantity: quantityRemaining
          })
        }).then(response => response.json())
        .then(resp => {
          console.log(resp)
        })

    }
  })


})
}

  render() {
    console.log(this.props.cartProducts.carts)
    // let usersCarts



    return(
      <div>
      <div class="cart-customer-name">Welcome to your cart {this.props.user.username}!</div>
      {this.props.cartProducts.carts ? this.props.cartProducts.carts.filter(cart =>  cart.user_id === this.props.user.user_id).map(cart => <CartProductsContainer key={cart.id} productCart={cart} />) : <div>Your Carty is empty</div> }
      <button class="checkout-button" onClick={this.cartCheckout}>Check-out</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProducts.cartProducts,
    user: state.user.user,
    allProducts: state.products.allProducts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    cartOrdered: () => dispatch(cartOrdered())
  }
}


export default withRouter (connect(mapStateToProps, mapDispatchToProps)(Cart));
