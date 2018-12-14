import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../Store/Actions/product_action'
import SellerProdContainer from './SellerProdContainer'

class SellerPage extends Component{

  componentDidMount() {
    console.log("i have mounted")
    this.props.fetchProducts()

  }

  mapProducts = () => {
    // console.log("mapping", this.props.coffeeProducts )
     return (this.props.coffeeProducts.allProducts[0] ? <SellerProdContainer product={this.props.coffeeProducts.allProducts[0]} /> : null )
  }

render() {

  return(

    <React.Fragment>
      This is seller Central
      {this.mapProducts()}
    </React.Fragment>
  )
}
}
const mapStateToProps = ({products}) => {
  // console.log(products)
  return {
    coffeeProducts: products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SellerPage);
