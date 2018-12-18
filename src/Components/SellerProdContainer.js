import React, { Component } from 'react';
import AddProduct from './AddProduct'
import { connect } from 'react-redux'


class SellerProdContainer extends Component {

  sellersProducts = () => {
    return this.props.product.filter(product => {
      return product["seller_id"] === 1
    }).map(productinfo => {
      return <div>
      <label>Name</label>
      <h5> {productinfo.name} </h5>
      <label>Price</label>
      <h5> {productinfo.price} </h5>
      <label>Description</label>
      <h5> {productinfo.description} </h5>
      <label>Title</label>
      <h5> {productinfo.title} </h5>
      <img src={productinfo.image} />
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    currentUser: state
  }
}


export default connect(mapStateToProps)(SellerProdContainer);
