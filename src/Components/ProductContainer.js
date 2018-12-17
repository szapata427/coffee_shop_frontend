import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductCart } from '../Store/Actions/cartActions'

class ProductContainer extends Component {


  handleClick = (selectedProduct) => {
    console.log(selectedProduct)
    this.props.addProductCart(selectedProduct)
  }

  mapProduct = () => {
    return this.props.product.map(product => {
      // console.log(product)
    return <div>
      <div className="product-attribute">Name: {product.name}</div><div className="product-attribute">Price: {product.price}</div>
      <div className="product-attribute">Quantity: {product.quantity}</div>
      <button onClick={() => this.handleClick(product)}>Add To Cart</button>
      </div>
    })
  }

render() {
  console.log(this.props.product)
  return (
    <div>
      {this.mapProduct()}
    </div>
  )
}
}

const mapDispatchToProps = (dispatch) => {
  console.log("hit dispatch")
  return {
    addProductCart: (selectedProduct) => dispatch(addProductCart(selectedProduct))
  }
}



export default connect(null, mapDispatchToProps)(ProductContainer);
