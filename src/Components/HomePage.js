import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../Store/Actions/product_action'
import ProductContainer from './ProductContainer'


class HomePage extends Component {

componentDidMount() {
  console.log("i have mounted")
  this.props.fetchProducts()

}

mapProducts = () => {
  // console.log("mapping", this.props.coffeeProducts )
   return (this.props.coffeeProducts.allProducts[0] ? <ProductContainer product={this.props.coffeeProducts.allProducts[0]} /> : null )
}

render() {
  // console.log(this.props.coffeeProducts.allProducts[0])
  return(
    <div>
    This is the homepage
    {this.mapProducts()}
    </div>
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



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
