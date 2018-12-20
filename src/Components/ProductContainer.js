import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductCart } from '../Store/Actions/cartActions'
import ProductPage from './ProductPage'

class ProductContainer extends Component {

  state = {
    clickedProduct: null
  }


  mapProduct = () => {
    return this.props.product.map(product => {
      // console.log(product)
    return <div><ProductPage key={product.id} product={product} productClicked={this.clickedProduct}/></div>

    })

  }

  clickedProduct = (productClicked) => {
    // console.log(productClicked)
    this.setState({
      clickedProduct: productClicked
    })
  }

  clearState = () => {
    this.setState({
      clickedProduct: null
    })
  }

render() {
  // console.log(this.props.product)
  return (
    <div>

      {this.state.clickedProduct === null ? this.mapProduct() :
        <div>
          <div>Selected Product</div>

            <button onClick={this.clearState}>All Products</button>
            </div>
      }
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
