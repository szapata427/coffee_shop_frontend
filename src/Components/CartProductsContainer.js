import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'


class CartProductsContainer extends Component {


  render() {
    // console.log(this.props.productCart)
    return(
      <div>
      {this.props.currentUser.user_id == this.props.productCart.user_id ?
    <React.Fragment>
      <div>
      <p>{this.props.productCart.name}</p>
        <p>{this.props.productCart.quantity}</p>
        <p>Price per Item: ${this.props.productCart["total_price"]}</p>
        <p>Total Price: ${this.props.productCart.quantity * this.props.productCart["total_price"]} </p>

      </div>
    </React.Fragment>

: null}
    </div>


    )
  }

}

const mapStateToProps = ({user}) => {
  return {
    currentUser: user.user
  }
}

export default withRouter (connect(mapStateToProps)(CartProductsContainer));
