const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
        return [];

    case 'FETCH_USER_FULFILLED':
      return action.payload.response;
    
    case 'FETCH_USER_REJECTED':
      return state;
    
    case 'FETCH_USER_CANCELLED':
      return state;

    default:
      return state;
  }
}

export default userReducer;
