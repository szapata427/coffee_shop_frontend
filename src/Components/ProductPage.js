import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductCart } from '../Store/Actions/cartActions'
import IndividualProductInfo from './IndividualProductInfo';
import {withRouter} from 'react-router-dom'

class ProductPage extends Component {

state = {

  selectedProduct: "",
  quantitySelected: ""
}



handleChange = (event, product) => {

  console.log(event.target.value, product)
  // debugger
  this.setState({
    quantitySelected : event.target.value
  })
}



handleSubmit = (e, cartproduct ) => {
  e.preventDefault()
     if (this.props.currentUser) {
    let quantitySel = this.state.quantitySelected
    let productPrice = cartproduct.price
    let totalCartPrice = quantitySel * productPrice
  this.setState({
    selectedProduct: cartproduct
  })

// let productExists = this.props.productInCart.carts.map(cart => {
//   if (cart.product_id === cartproduct.id) {
//     return cart
//   }
// })
//
// console.log(productExists)

  // if(this.props.productInCart.carts)


  // fetch(`http://localhost:3001/carts`, {
  fetch(`https://localhost:3005/carts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "applicatoin/json"
    },
    body: JSON.stringify({
      name: cartproduct.name,
      quantity: this.state.quantitySelected,
      total_price: totalCartPrice.toFixed(2),
      ordered: false,
      user_id: this.props.currentUser.user_id,
      product_id: cartproduct.id,
      image: cartproduct.image
    })
  }).then(response => response.json())
  .then(cart => {
    console.log(cart)
    if (cart.message !== "error: could not add to cart") {

      this.props.addProductCart(cart)
    }

    else {
      alert("Quantity must be at least 1")
    }


  })
  }

  else {
    alert("Need to log in to add to cart")
    this.props.history.push("/login")
  }
}

clickedProduct = (event, clickedProduct) => {
  this.props.productClicked(clickedProduct)
}


render() {
  const {product} = this.props

  var quantityArray = []
  for (var i = 1; i < parseInt(product.quantity); i++) {
    quantityArray.push(i)
  }

  return (
    <div class="main-home-product-container">
      <div class="secondary-home-container">
      <form onSubmit={(e) => this.handleSubmit(e, product)}>
            <div class="product-image-home">
              <img class="home-product-image" src={product.image} onClick={(event) => this.clickedProduct(event, product)}/>
            </div>
                <a id="main-title">{product.title}</a>
                <p class="home-product-name">{product.name} </p>
                <p class="home-product-price"> ${product.price} </p>
      <div>
    </div>

      { parseInt(product.quantity) > 1 ?
        <React.Fragment>
          <select onChange={(event) => this.handleChange(event, product)} name="quantitySelected" class="ui dropdown"><option value="0">Qty</option>
            {quantityArray.map(num => <option value={num.toString()}>{num}</option> )}
          </select>

                {this.props.currentUser.type !== "Seller" ? <button class="add-to-cart-button"><i class="shop icon"></i>Add To Cart</button> : <div className="seller-addtocart">Customer Account Needed To Buy</div> }
              </React.Fragment>  : <span className="soldout">Sold Out</span>}
      </form>
      </div>
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.user,
    productInCart: state.cartProducts.cartProducts
  }
}


const mapDispatchToProps = (dispatch) => {
  // console.log("hit dispatch")
  return {
    addProductCart: (selectedProduct) => dispatch(addProductCart(selectedProduct))
  }
}

// <input value={this.state.value} type="text" onChange={(event) => this.handleChange(event, product)} />


export default withRouter (connect(mapStateToProps, mapDispatchToProps)(ProductPage));
