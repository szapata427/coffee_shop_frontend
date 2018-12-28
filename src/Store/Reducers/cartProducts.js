

const inititalState = {
  cartProducts: []
}

const reducer = (state = inititalState, action ) => {
  switch(action.type) {
    case "ADD_PRODUCT_CART":
    const productToCart = action.payload
    console.log(productToCart)
    console.log(state)
    console.log("hit product cart", state.cartProducts)
    const addArray = [...state.cartProducts.carts, productToCart]
    console.log(addArray)
    return {cartProducts: {carts: addArray}}



    case "FETCH_CART":
    // console.log("fetched cart", action.payload)
    const fetchedCart = action.payload
    console.log(fetchedCart);
    let filteredCurrentCarts = fetchedCart.carts.filter(cart => cart.ordered === false)
    console.log(filteredCurrentCarts)
    return {cartProducts: {carts:filteredCurrentCarts}}



    case "DELETE_CART":
    console.log("delete cart state", state)

    console.log("delete cart", state.cartProducts)
    // console.log("THE DELETED CART", action.payload)
    const newArray = state.cartProducts.carts.filter(cart => {
      console.log(cart !== action.payload);
      return cart !== action.payload
    })

    console.log(newArray)

    return {cartProducts: {carts: newArray}}

    case "CART_ORDERED":
    console.log("deleting everything in cart", state)
    return {cartProducts: {carts: []}}


    default:
    return state


  }
}




export default reducer;
