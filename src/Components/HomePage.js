import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../Store/Actions/product_action'
import ProductContainer from './ProductContainer'
import SaleHeader from './SaleHeader'


class HomePage extends Component {

  state = {
    search: false,
    searchWord: null
  }

componentDidMount() {
  // console.log("i have mounted")
  this.props.fetchProducts()

}

handleChange = (event) => {
  console.log(event.target.value)
  this.setState({
    searchWord: event.target.value
  })
}

mapProducts = () => {
  console.log(this.props.coffeeProducts.allProducts)
  let filteredArray;

  if (this.state.searchWord == null) {
    return (this.props.coffeeProducts.allProducts ? <ProductContainer product={this.props.coffeeProducts.allProducts} /> : null )
  }
  else {
    filteredArray = this.props.coffeeProducts.allProducts.filter(product => {
      return product.title.toLowerCase().search(this.state.searchWord.toLowerCase()) !== -1
    })

  console.log(filteredArray)
    return (this.props.coffeeProducts.allProducts ? <ProductContainer product={filteredArray} /> : null )
  }
}

render() {
  // console.log(this.props.coffeeProducts.allProducts)
  return(

    <div>
      <SaleHeader />
        <div class="ui category search" >
        <div class="ui icon input">
            <input onChange={(event) => this.handleChange(event)} class="prompt" type="text" name="searchWord" placeholder="Search Product..." />
          <i class="search icon"></i>
        </div>
      </div>
    <div className="home-message">Colombia Coffee Shop</div>

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
