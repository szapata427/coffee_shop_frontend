//
//
const initialState = {
  user: {
    username: "",
    password: ""

  }
}
const reducer = (state = initialState, action) => {
  const newState = {...state};
  switch(action.type) {
    case "NEW_USER":
    console.log(action.payload)
    const theuser = action.payload
    return {user: theuser}

    default:
    return newState;
  }


}


export default reducer;
