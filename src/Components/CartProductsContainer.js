import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'


class CartProductsContainer extends Component {

  render() {
    // console.log(this.props.productCart)
    return(
      <div>
      {this.props.currentUser.user_id == this.props.productCart.user_id ? this.props.productCart.name : null}
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
