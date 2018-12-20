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
   return (this.props.coffeeProducts.allProducts ? <ProductContainer product={this.props.coffeeProducts.allProducts} /> : null )
}

render() {
  // console.log(this.props.coffeeProducts.allProducts)
  return(
    <div>
    <h1>Enjoy our Coffee</h1>
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
