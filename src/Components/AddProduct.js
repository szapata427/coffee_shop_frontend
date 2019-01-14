import React, { Component } from 'react';
import { addProduct } from '../Store/Actions/product_action'
import { connect } from 'react-redux'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class AddProduct extends Component {

  state = {
    title: "",
    name: "",
    price: null,
    description: "",
    image: "",
    cost: "",
    weight: "",
    quantity: "",
    sku: "",
    // seller_id: null
  }

handleChange = (event) => {
  // console.log(event.target.value)
  this.setState({
    [event.target.name] : event.target.value
  }, () => console.log(this.state))
}

handleSubmit = (event) => {
  event.preventDefault()
  // console.log(this.state)
  // let price = this.state.price
  // console.log(price.to_i)
this.props.addProduct(this.state)

fetch(`http://localhost:3001/products`, {
// fetch(`https://coffee-ecommerce-api.herokuapp.com//products`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify({
    name: this.state.name,
    title: this.state.title,
    price: this.state.price,
    description: this.state.description,
    image: this.state.image,
    cost: this.state.cost,
    weight: this.state.weight,
    quantity: this.state.quantity,
    sku: this.state.sku,
    seller_id: this.props.currentUser["user_id"]

  })
}).then(response => response.json())
// .then(product => console.log(product))

}

imageSubmit = () => {
  var myUploadWidget;
    myUploadWidget = window.cloudinary.openUploadWidget({
      cloudName: 'deq2mkfpe',
      uploadPreset: 'cxiy7mhw'},
      (error, result) => {
        console.log(result)
        if (result.info.secure_url){
          this.setState({
            image: result.info.secure_url
          })
          }
        }
      );
}


render() {
  return(

    <React.Fragment>
      <div class="add-product-sign">Add New Product</div>
      <CloudinaryContext cloudName="deq2mkfpe">
        <button id="upload_widget_opener" onClick={this.imageSubmit}><i class="camera icon"></i>Upload Your Product Image</button>
      </CloudinaryContext>
      <form onSubmit={this.handleSubmit} class="add-product-form">
        <label>Title</label>
        <input name="title" type="text" onChange={this.handleChange} placeholder="Title" value={this.state.value}/>
        <label>Name</label>
        <input name="name" type="text" onChange={this.handleChange} placeholder="Name" value={this.state.value}/>
        <label>Price</label>
        <input name="price" type="number" step="0.01" onChange={this.handleChange} placeholder="Price" value={this.state.value}/>
          <label>Description</label>
          <input name="description" type="text" onChange={this.handleChange} placeholder="Description" value={this.state.value}/>
            <label>Cost</label>
            <input name="cost" type="number" step="0.01" onChange={this.handleChange} placeholder="Cost" value={this.state.value}/>
                <label>Weight</label>
                <input name="weight" type="number" step="0.01" onChange={this.handleChange} placeholder="Weight" value={this.state.value}/>
                  <label>Quantity</label>
                  <input name="quantity" type="number" onChange={this.handleChange} placeholder="Quantity" value={this.state.value}/>
                    <label>Sku</label>
                    <input name="sku" type="number" onChange={this.handleChange} placeholder="Sku" value={this.state.value}/>


                    <button class="add-product-button"><i class="shop icon"></i>Add Product</button>
        </form>




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
  addProduct: (newproduct) => dispatch({
    type: "ADD_PRODUCT",
    payload: newproduct
  })
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
