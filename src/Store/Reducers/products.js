//
// import {
//   FETCH_PRODUCTS_BEGIN
// } from '../Actions/product_action'

const initialState = {
  allProducts: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_PRODUCTS":
    console.log(action.payload)
    const fetchedProducts = action.payload
    return {allProducts: fetchedProducts}

    case "ADD_PRODUCT":
    const newproduct = action.payload
    // const allProductsArray = [...state.allProducts]
    // console.log(allProductsArray)
      console.log("adding product", action.payload, state.allProducts)
    return {allProducts: [...state.allProducts, newproduct]}



    default:
    return state

  }



}


export default reducer;
