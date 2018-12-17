import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductCart } from '../Store/Actions/cartActions'
import ProductPage from './ProductPage'

class ProductContainer extends Component {

  // state = {
  //
  //   selectedProduct: "",
  //   quantitySelected: ""
  // }


  // handleClick = (selectedProduct) => {
  //   console.log(selectedProduct)
  //   this.props.addProductCart(selectedProduct)
  // <button onClick={() => this.handleClick(product)}>Add To Cart</button>
  // }

  // handleChange = (event, product) => {
  //   console.log(event.target.value, product)
  //   this.setState({
  //     quantitySelected : event.target.value
  //   })
  // }
  //
  // handleSubmit = (e, cartproduct, ) => {
  //   e.preventDefault()
  //   console.log(cartproduct)
  //   this.setState({
  //     selectedProduct: cartproduct
  //   }, () => console.log(this.state))
  //
  //   this.props.addProductCart(this.state)
  // }

  mapProduct = () => {
    return this.props.product.map(product => {
      // console.log(product)
    return <div><ProductPage key={product.id} product={product} /></div>
    // <div>
    //   <form onSubmit={(e) => this.handleSubmit(e, product)}>
    //   <div>Name: {product.name}</div><div>Price: {product.price}</div>
    //   <div>Quantity Available: {product.quantity}</div>
    //   <input value={this.state.value} type="text" onChange={(event) => this.handleChange(event, product)} />
    //
    //   <button>Add To Cart</button>
    //   </form>
    //   </div>
    })
  }

render() {
  // console.log(this.props.product)
  return (
    <div>
      {this.mapProduct()}
    </div>
  )
}

}

// const mapDispatchToProps = (dispatch) => {
//   console.log("hit dispatch")
//   return {
//     addProductCart: (selectedProduct) => dispatch(addProductCart(selectedProduct))
//   }
// }



// export default connect(null, mapDispatchToProps)(ProductContainer);
export default ProductContainer;
