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
    // console.log(action.payload)
    return {allProducts: [action.payload]}



    default:
    return state

  }



}


export default reducer;
