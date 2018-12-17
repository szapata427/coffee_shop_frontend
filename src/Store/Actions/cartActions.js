
export const addProductCart = (cartProduct) => {
  console.log("cart action", cartProduct)
  return {
    type: "ADD_PRODUCT_CART",
    payload: cartProduct
  }
}
