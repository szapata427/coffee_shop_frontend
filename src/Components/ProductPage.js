import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductCart } from '../Store/Actions/cartActions'

class ProductPage extends Component {

state = {

  selectedProduct: "",
  quantitySelected: ""
}



handleChange = (event, product) => {
  // console.log(event.target.value, product)
  this.setState({
    quantitySelected : event.target.value
  })
}

handleSubmit = (e, cartproduct ) => {
  e.preventDefault()
  // console.log(cartproduct, this.state)
    cartproduct["quantity"] = this.state.quantitySelected
    console.log(cartproduct)
  this.setState({
    selectedProduct: cartproduct
  })

  this.props.addProductCart(cartproduct)

  fetch(`http://localhost:3001/carts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "applicatoin/json"
    },
    body: JSON.stringify({
      name: cartproduct.name,
      quantity: cartproduct.quantity,
      total_price: 10,
      ordered: false,
      user_id: this.props.currentUser.user_id,
      product_id: cartproduct.id
    })
  }).then(response => response.json())
  .then(cart => console.log(cart))

}


render() {
  // console.log(this.props.product)
  const {product} = this.props
  return (
    <div>
      <form onSubmit={(e) => this.handleSubmit(e, product)}>
        <div class="ui divided items">
          <div class="item">
            <div class="image">
              <img src={product.image}/>
              </div>
              <div className="content">
                <a class="header">{product.title}</a>
                <div class="meta">
                  <span class="cinema">{product.name} 14</span>
                </div>
                <label>Description</label>
                <div class="description">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
      <input value={this.state.value} type="text" onChange={(event) => this.handleChange(event, product)} />
      <div class="extra">
        <button class="ui basic button"><i class="shop icon"></i>Add To Cart</button>
        </div>
      </form>
      </div>
  )
}
}

const mapStateToProps = ({user}) => {
  return {
    currentUser: user.user
  }
}


const mapDispatchToProps = (dispatch) => {
  // console.log("hit dispatch")
  return {
    addProductCart: (selectedProduct) => dispatch(addProductCart(selectedProduct))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
