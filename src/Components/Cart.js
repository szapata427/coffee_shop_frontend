import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchCart } from '../Store/Actions/cartActions'
import CartProductsContainer from './CartProductsContainer'
import {withRouter} from 'react-router-dom'



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
        // this.setState({
        //   user:resp
        // })
        this.props.fetchCart()
        // this.props.renderProps.history.push("/cart")
      })



    }
    else {
      // console.log('inside the else', this.props.history);;
      this.props.history.push('/login')
      // push them to the route you want
    }

  }

  cartCheckout = (e, carts) => {
    console.log(this.props.cartProducts.carts)
    console.log(this.props.user)
     let cartFiltered = this.props.cartProducts.carts.filter(cart =>  cart.user_id === this.props.user.user_id)
     let orderedCarts = cartFiltered.map(cart =>
     { cart.ordered = ( cart.ordered === false ? true : false)
       return cart

     })

     console.log(orderedCarts)
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
         console.log(resp)
       })
     })


  }

  render() {
    // console.log(this.props.cartProducts.carts)
    // let usersCarts



    return(
      <div>
      Welcome to your Cart!
      {this.props.cartProducts.carts ? this.props.cartProducts.carts.filter(cart =>  cart.user_id === this.props.user.user_id).map(cart => <CartProductsContainer key={cart.id} productCart={cart} />) : <div>Your Carty is empty</div> }
      <button onClick={this.cartCheckout}>Check-out</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.cartProducts.cartProducts)
  return {
    cartProducts: state.cartProducts.cartProducts,
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart())
  }
}


export default withRouter (connect(mapStateToProps, mapDispatchToProps)(Cart));
