
export const addProductCart = (cartProduct) => {
  // console.log("cart action", cartProduct)
  return {
    type: "ADD_PRODUCT_CART",
    payload: cartProduct
  }
}

export const deletedCart = (cart) => {
  return {
    type: "DELETE_CART",
    payload: cart
  }
}

export const cartOrdered = () => {
  return {
    type: "CART_ORDERED",
    payload: []
  }

}

export function fetchCart() {
  return (dispatch) => {
    return  fetch(`http://localhost:3001/carts`)
    // return  fetch(`https://coffee-ecommerce-api.herokuapp.com/carts`)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then((data) => dispatch({type: "FETCH_CART", payload: data}))
  }
}
