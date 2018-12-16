import React, { Component } from 'react';
import AddProduct from './AddProduct'


class SellerProdContainer extends Component {

  sellersProducts = () => {
    return this.props.product.filter(product => {
      return product["seller_id"] === 1
    }).map(productinfo => {
      return <div>
      <h2> {productinfo.name} </h2>
      <h2> {productinfo.price} </h2>
      </div>


  })
}


  render() {
    console.log(this.props.product)
    return(
      <React.Fragment>
       {this.sellersProducts()}
      <AddProduct />
      </React.Fragment>
    )
  }
}

export default SellerProdContainer;
