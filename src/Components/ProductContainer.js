import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductCart } from '../Store/Actions/cartActions'
import ProductPage from './ProductPage'

class ProductContainer extends Component {

  state = {
    clickedProduct: null,
    selectedProduct: "",
    quantitySelected: ""
  }


  mapProduct = () => {
    return this.props.product.map(product => {
      // console.log(product)
    return <div><ProductPage key={product.id} product={product} productClicked={this.clickedProduct}/></div>

    })

  }

  clickedProduct = (productClicked) => {
    console.log(productClicked)
    this.setState({
      clickedProduct: productClicked
    })
  }

  clearState = () => {
    this.setState({
      clickedProduct: null
    })
  }


handleChange = (event, product) => {
  console.log(event.target.value, product)
  this.setState({
    quantitySelected : event.target.value
  })
}

handleSubmit = (e, cartproduct ) => {
  e.preventDefault()
  console.log(cartproduct, this.state)
  console.log(this.state.quantitySelected)
    cartproduct["quantity"] = this.state.quantitySelected
    let quantitySel = this.state.quantitySelected
    let productPrice = cartproduct.price
    let totalCartPrice = quantitySel * productPrice

this.setState({
  selectedProduct: cartproduct
})

fetch(`http://localhost:3001/carts`, {
// fetch(`https://coffee-ecommerce-api.herokuapp.com/carts`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "applicatoin/json"
  },
  body: JSON.stringify({
    name: cartproduct.name,
    quantity: this.state.quantitySelected,
    total_price: totalCartPrice,
    ordered: false,
    user_id: this.props.currentUser.user_id,
    product_id: cartproduct.id,
    image: cartproduct.image
  })
}).then(response => response.json())
.then(cart => {
  console.log(cart)
  this.props.addProductCart(cart)

})


}


render() {

  var quantityArray = []
  if (this.state.clickedProduct) {
  for (var i = 1; i < parseInt(this.state.clickedProduct.quantity); i++) {
    quantityArray.push(i)


  }
}

  return (
    <React.Fragment>

      {this.state.clickedProduct === null ? this.mapProduct() :
        <React.Fragment>
          <div id="product-info-main-container">
            <img id="product-info-image" src={this.state.clickedProduct.image} alt="sorry"/>
            <div>
              <div id="product-info-title">{this.state.clickedProduct.title}</div>
              <div id="product-info-name">{this.state.clickedProduct.name}</div>
              <div id="product-info-price"> ${this.state.clickedProduct.price}</div>
              <div id="product-info-description"> {this.state.clickedProduct.description}</div>
              {parseInt(this.state.clickedProduct.quantity) > 1 ? <React.Fragment>
                <form onSubmit={(e) => this.handleSubmit(e, this.state.clickedProduct)}>
                <select onChange={(event) => this.handleChange(event, this.state.clickedProduct)} name="quantitySelected" class="ui dropdown"><option value="0">Qty</option>
                  {quantityArray.map(num => <option value={num.toString()}>{num}</option> )}
                </select>

                        <button class="add-to-cart-button" ><i class="shop icon"></i>Add To Cart</button>
                      </form>
                    </React.Fragment> : <span className="soldout">Sold Out</span>}
            </div>
          </div>
          <button class="back-allproducts-button" onClick={this.clearState}> Back to Products</button>
          </React.Fragment>
      }
    </React.Fragment>

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
  console.log("hit dispatch")
  return {
    addProductCart: (selectedProduct) => dispatch(addProductCart(selectedProduct))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
