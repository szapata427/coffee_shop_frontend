import React, { Component } from 'react';
import { addProduct } from '../Store/Actions/product_action'
import { connect } from 'react-redux'

class AddProduct extends Component {

  state = {
    name: "",
    price: null,
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
this.props.addProduct(this.state)
}


render() {
  return(

    <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" onChange={this.handleChange} value={this.state.value}/>
        <br></br>
        <label>Price</label>
        <input name="price" type="number" onChange={this.handleChange} value={this.state.value}/>
        <br></br>
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
