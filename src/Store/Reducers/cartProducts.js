

const inititalState = {
  cartProducts: []
}

const reducer = (state = inititalState, action ) => {
  switch(action.type) {
    case "ADD_PRODUCT_CART":
    const productToCart = action.payload
    console.log("hit product cart", state)
    return {cartProducts: [...state.cartProducts, productToCart]}

    default:
    return state
  }
}




export default reducer;
