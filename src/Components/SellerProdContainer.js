import React, { Component } from 'react';

class SellerProdContainer extends Component {

  sellersProducts = () => {
    return this.props.product.filter(product => {
      return product["seller_id"] === 1
    }).map(productinfo => {
      return <div> {productinfo.name} </div>
    })
  }

  render() {
    console.log(this.sellersProducts())
    return(
      <React.Fragment>
      seller product info
      {this.sellersProducts()}
      </React.Fragment>
    )
  }
}

export default SellerProdContainer;
