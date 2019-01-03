import React, { Component } from 'react';
import AddProduct from './AddProduct'
import { connect } from 'react-redux'
import { sellerDeleteProduct } from '../Store/Actions/product_action'


class SellerProdContainer extends Component {

  deleteOwnProduct = (e, product) => {
    e.preventDefault()
    console.log(product)
    this.props.sellerDeleteProduct(product)

    fetch(`http://localhost:3001/products/${product.id}`, {
      method: "delete"
    }).then(response => response.json())
    .then(resp => console.log(resp))
  }

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
      <label class="label-seller-product-title-info">Cost:</label>
      <span class="seller-product-info-title"> ${productinfo.cost} </span>
      <br></br>
      <label class="label-seller-product-title-info">Profit Margin per Item:</label>
      <span class="seller-product-info-title"> {((productinfo.cost / productinfo.price) * 100).toFixed(2)}% </span>
          <br></br>
      <img class="seller-product-info-image" src={productinfo.image} />
      <button class="seller-deletebutton" onClick={(e) => this.deleteOwnProduct(e, productinfo)}>Delete</button>
      </div>


  })
}


  render() {
    console.log(this.props.product)
    console.log(this.props.currentUser["user_id"])
    // total amount of products per seller
    let totalProducts;
    if (this.props.currentUser) {
       totalProducts = this.props.product.map(product => product.seller_id === this.props.currentUser["user_id"]).filter(product => product === true).length
     }
    console.log(totalProducts)
    return(
      <React.Fragment>
        <p class="seller-username">{this.props.currentUser.username}</p>
        <AddProduct />
        <p class="seller-currentProducts">{this.props.currentUser.username} Current Products</p>
        <p class="seller-totalProducts">Total Amount of Products: {totalProducts}</p>
       {this.sellersProducts()}
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

const mapDispatchToProps = (dispatch) => {
  return {
    sellerDeleteProduct: (deletedProduct) => dispatch({
      type: "DELETE_PRODUCT",
      payload: deletedProduct
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SellerProdContainer);
