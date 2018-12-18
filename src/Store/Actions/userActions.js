

export const currentUser = (theuser) => {
  console.log("hit the action")
  return {
    type: "CURRENT_USER",
    payload: theuser
  }
}
