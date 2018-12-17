
export const addProductCart = (cartProduct) => {
  console.log(cartProduct)
  return {
    type: "ADD_PRODUCT_CART",
    payload: cartProduct
  }
}
