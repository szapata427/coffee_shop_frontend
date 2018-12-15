import React, { Component } from 'react';
import AddProduct from './AddProduct'


class SellerProdContainer extends Component {

  sellersProducts = () => {
    return this.props.product.filter(product => {
      return product["seller_id"] === 1
    }).map(productinfo => <div> {productinfo.name} </div>)
  }


  render() {
    console.log(this.props.product)
    // console.log(this.sellersProducts())
    return(
      <React.Fragment>
       {this.sellersProducts()}
      <AddProduct />
      </React.Fragment>
    )
  }
}

export default SellerProdContainer;
