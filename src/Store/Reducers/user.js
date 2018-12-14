//
//
const initialState = {
  user: {}
}

const reducer = (state = initialState, action) => {
  const newState = {...state};
  switch(action.type) {
    case "NEW_USER":
    return {user: [action.payload]}
  }
  return newState;


}


export default reducer;
