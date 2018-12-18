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
    cost: null,
    weight: null,
    quantity: null,
    sku: null,
    seller_id: 1
  }

handleChange = (event) => {
  // console.log(event.target.value)
  this.setState({
    [event.target.name] : event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  // console.log(this.state)
  // let price = this.state.price
  // console.log(price.to_i)
this.props.addProduct(this.state)

fetch(`http://localhost:3001/products`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify({
    name: this.state.name,
    title: this.state.title,
    price: this.state.price,
    description:this.state.description,
    cost: this.state.cost,
    weight: this.state.weight,
    quantity: this.state.quantity,
    sku: this.state.sku,
    seller_id: this.state.seller_id

  })
}).then(response => response.json())
.then(product => console.log(product))

}

imageSubmit = () => {
  var myUploadWidget;
    myUploadWidget = window.cloudinary.openUploadWidget({
      cloudName: 'deq2mkfpe',
      uploadPreset: 'cxiy7mhw'},
      (error, result) => {
    console.log(result.info.secure_url)});
}


render() {
  return(

    <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input name="title" type="text" onChange={this.handleChange} placeholder="Title" value={this.state.value}/>
        <label>Name</label>
        <input name="name" type="text" onChange={this.handleChange} placeholder="Name" value={this.state.value}/>
        <label>Price</label>
        <input name="price" type="number" onChange={this.handleChange} placeholder="Price" value={this.state.value}/>
          <label>Description</label>
          <input name="description" type="text" onChange={this.handleChange} placeholder="Description" value={this.state.value}/>
            <CloudinaryContext cloudName="deq2mkfpe">
          <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
          <script>cloudinary.setCloudName(deq2mkfpe);</script>
          <a href="#" id="upload_widget_opener" onClick={this.imageSubmit} >Upload multiple images</a>
          </CloudinaryContext>


          <label>Cost</label>
          <input name="cost" type="number" onChange={this.handleChange} placeholder="Cost" value={this.state.value}/>
                <label>Weight</label>
                <input name="weight" type="number" onChange={this.handleChange} placeholder="Weight" value={this.state.value}/>
                  <label>Quantity</label>
                  <input name="quantity" type="number" onChange={this.handleChange} placeholder="Quantity" value={this.state.value}/>
                    <label>Sku</label>
                    <input name="sku" type="number" onChange={this.handleChange} placeholder="Sku" value={this.state.value}/>
        <button>Submit</button>

      </form>
    </React.Fragment>
  )
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

export default connect(null, mapDispatchToProps)(AddProduct);
