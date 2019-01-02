import React, { Component } from 'react';
import AddProduct from './AddProduct'
import { connect } from 'react-redux'


class SellerProdContainer extends Component {

  sellersProducts = () => {
    return this.props.product.filter(product => {
      return product["seller_id"] === this.props.currentUser["user_id"]
    }).map(productinfo => {
      return <div class="main-sellerpage-container">
      <label class="label-seller-product-info">Name:</label>
      <span class="seller-product-info"> {productinfo.name} </span>
      <br></br>
      <label class="label-seller-product-info">Price:</label>
      <span class="seller-product-info"> ${productinfo.price} </span>
      <br></br>
      <label class="label-seller-product-info">Description:</label>
      <span class="seller-product-description"> {productinfo.description} </span>
      <br></br>
    <label class="label-seller-product-title-info">Title:</label>
      <span class="seller-product-info-title"> {productinfo.title} </span>
      <br></br>
      <img class="seller-product-info-image" src={productinfo.image} />
      </div>


  })
}


  render() {
    // console.log(this.props.product)
    // console.log(this.props.currentUser["user_id"])
    return(
      <React.Fragment>
        <p>{this.props.currentUser.username}</p>
       {this.sellersProducts()}
      <AddProduct />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({user}) => {
  // console.log(user.user)
  return {
    currentUser: user.user
  }
}


export default connect(mapStateToProps)(SellerProdContainer);
