const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
        return [];

    case 'FETCH_USER_FULFILLED':
      return action.payload.response;
    
    case 'FETCH_USER_REJECTED':
      return state;
    
    default:
      return state;
  }
}

export default userReducer;
