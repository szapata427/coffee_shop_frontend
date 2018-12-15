import React, { Component } from 'react';


class ProductContainer extends Component {

  mapProduct = () => {
    return this.props.product.map(product => {
    return <div> <h3>{product.name}</h3><h3>{product.price}</h3> </div>
    })
  }

render() {
  console.log(this.props.product)
  return (
    <div>
      {this.mapProduct()}
    </div>
  )
}
}



export default ProductContainer;
