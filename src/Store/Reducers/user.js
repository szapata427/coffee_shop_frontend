//
//
const initialState = {
  user: ""
}
const reducer = (state = initialState, action) => {
  console.log("THIS IS USER STATE", state, action.type);
  switch(action.type) {
    case "CURRENT_USER":
    console.log("user reducer", action.payload)
    // const theuser = action.payload
    return {...state,user: action.payload}

    case "DELETE_USER":
    return {...state, user: ""}

    default:
    return state;
  }


}


export default reducer;
