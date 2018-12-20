import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductCart } from '../Store/Actions/cartActions'
import IndividualProductInfo from './IndividualProductInfo';

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
  // console.log(this.props.currentUser)
  // console.log(this.props.productInCart.carts)
  e.preventDefault()
  // console.log(cartproduct, this.state)
    cartproduct["quantity"] = this.state.quantitySelected
    // console.log(cartproduct)
  this.setState({
    selectedProduct: cartproduct
  })


  fetch(`http://localhost:3001/carts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "applicatoin/json"
    },
    body: JSON.stringify({
      name: cartproduct.name,
      quantity: cartproduct.quantity,
      total_price: 10,
      ordered: false,
      user_id: this.props.currentUser.user_id,
      product_id: cartproduct.id
    })
  }).then(response => response.json())
  .then(cart => {
    // console.log(cart)
    this.props.addProductCart(cart)

  })

}

clickedProduct = (event, clickedProduct) => {
  // console.log(clickedProduct)
  this.props.productClicked(clickedProduct)
}


render() {
  // console.log(this.props.product)
  // console.log(this.props)
  const {product} = this.props

  var quantityArray = []
  for (var i = 1; i < parseInt(product.quantity); i++) {
    quantityArray.push(i)
  }


  return (
    <div>
      <form onSubmit={(e) => this.handleSubmit(e, product)}>
        <div class="ui divided items">
          <div class="item">
            <div class="image">
              <img src={product.image} onClick={(event) => this.clickedProduct(event, product)}/>
              </div>
              <div className="content">
                <a class="header">{product.title}</a>
                <div class="meta">
                  <span class="cinema">{product.name} </span>
                </div>
                <label>Description</label>
                <div class="description">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>

      { parseInt(product.quantity) > 0 ?
        <React.Fragment>
          <select onChange={(event) => this.handleChange(event, product)} name="quantitySelected" class="ui dropdown"><option value="0">Qty</option>
            {quantityArray.map(num => <option value={num.toString()}>{num}</option> )}
          </select>
              <div class="extra">
                <button class="ui green button"><i class="shop icon"></i>Add To Cart</button>
              </div></React.Fragment> : <span id="soldout">Sold Out</span>}
      </form>
    </div>
  )
}
}

const mapStateToProps = state => {
  // console.log(state.cartProducts.cartProducts)
  // console.log(state.user.user)
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


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
