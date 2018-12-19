
export const addProductCart = (cartProduct) => {
  // console.log("cart action", cartProduct)
  return {
    type: "ADD_PRODUCT_CART",
    payload: cartProduct
  }
}

export function fetchCart() {
  return (dispatch) => {
    return  fetch(`http://localhost:3001/carts`)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then((data) => dispatch({type: "FETCH_CART", payload: data}))
  }
}
