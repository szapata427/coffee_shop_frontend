import React, { Component } from 'react';
import { connect } from 'react-redux';


class IndividualProductInfo extends Component {

  render() {
    console.log(this.props.clickedProduct)
    return(
      <div>
      Individual Product Information
      </div>
    )
  }
}

export default (IndividualProductInfo);
