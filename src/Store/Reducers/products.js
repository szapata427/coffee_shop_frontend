
const initialState = {
  allProducts: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_PRODUCTS":
    console.log(action.payload, state )
    const fetchedProducts = action.payload
    return {...state,allProducts: fetchedProducts}

    case "ADD_PRODUCT":
    const newproduct = action.payload
    // const allProductsArray = [...state.allProducts]
    // console.log(allProductsArray)
      console.log("adding product", action.payload, state.allProducts)
    return {...state, allProducts: [...state.allProducts, newproduct]}



    default:
    return state

  }



}


export default reducer;
