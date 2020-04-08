// Step 4: work on combining all reducers for the entire app
//Step 4.1: Combining Reducers using Redux's combineReducers
import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

//Step 4.2 importing   all reducers here
import postReducer from './postReducer';

//Step 4.3 combine all reducers into one big object for store
const rootReducers = combineReducers({
  posts: postReducer,
  toastr: toastrReducer // <- Mounted at toastr.
});

//Step 4.4 exporing the rootReducer -- that is the combined reducer
export default rootReducers; 

// Find Step 5 in src/index.js 