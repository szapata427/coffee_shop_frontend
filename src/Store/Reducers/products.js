
const initialState = {
  allProducts: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_PRODUCTS":
    console.log(action.payload, state )
    const fetchedProducts = action.payload
    return {allProducts: fetchedProducts}

    case "ADD_PRODUCT":
    const newproduct = action.payload
    // const allProductsArray = [...state.allProducts]
    // console.log(allProductsArray)
      console.log("adding product", action.payload, state.allProducts)
    return {allProducts: [...state.allProducts, newproduct]}

    case "DELETE_PRODUCT":
    console.log("Deleting your product", action.payload)
    let filteredArray = state.allProducts.filter(product => {
      return product.id !== action.payload.id
    })
    // debugger
    return {
      allProducts: filteredArray
    }

    default:
    return state

  }



}


export default reducer;
