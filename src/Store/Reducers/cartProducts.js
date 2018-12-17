

const inititalState = {
  cartProducts: []
}

const reducer = (state = inititalState, action ) => {
  switch(action.type) {
    case "ADD_PRODUCT_CART":
    const productToCart = action.payload
    console.log(productToCart)
    // console.log("hit product cart", state)
    return {cartProducts: [...state.cartProducts, productToCart]}

    case "FETCH_CART":
    // console.log("fetched cart", action.payload)
    const fetchedCart = action.payload
    return {cartProducts: fetchedCart}


    default:
    return state


  }
}




export default reducer;
