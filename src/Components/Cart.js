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
      console.log('inside the else', this.props.history);;
      this.props.history.push('/login')
      // push them to the route you want
    }

  }

  render() {
  //   console.log(this.props.cartProducts.carts ? )
  // const cartArray =  this.props.cartProducts.carts.map(cart => <CartProductsContainer productCart={cart} />)

  console.log(this.props.cartProducts.carts)
    return(
      <div>
      Welcome to your Cart!
      {this.props.cartProducts.carts ? this.props.cartProducts.carts.map(cart => <CartProductsContainer key={cart.id} productCart={cart} />) : <div>Your Carty is empty</div> }
      </div>
    )
  }
}

const mapStateToProps = ({cartProducts}) => {
  console.log(cartProducts.cartProducts)
  return {
    cartProducts: cartProducts.cartProducts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart())
  }
}


export default withRouter (connect(mapStateToProps, mapDispatchToProps)(Cart));
