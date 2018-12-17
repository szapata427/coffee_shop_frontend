import React, { Component } from 'react';
import {connect} from 'react-redux';




class Cart extends Component {

  render() {
    console.log(this.props.cartProducts)
    return(
      <div>
      Welcome to your Cart!
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    cartProducts: state
  }
}


export default connect(mapStateToProps)(Cart);
