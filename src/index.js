import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { fetchUserEpic } from './epics';
import 'rxjs';


// Step 1: Setup the the Redux Store here   // Step 14.2 use redux-thunk middleware for async actions
import { createStore, applyMiddleware, compose } from 'redux'; // applyMiddlewae is used in createStore method

// Step 5: importing rootReducer to create a store
import rootReducers from './reducers';

// Step 6 & 6.1: use Provider to provide the store data to the app
//Definition: The Provider component uses something 
//called as React Context which allows you to pass the 
//store object to any components that needs to access it 
// without the need to pass props.
//Provider should be imported from react-redux 
import { Provider } from 'react-redux'; 
// Step 14.1
import logger from 'redux-logger'; 
import thunk from 'redux-thunk'; // logger should be added as last in the middleware

import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

// redux-observable  =============
import { createEpicMiddleware } from 'redux-observable';
const epicMiddleware = createEpicMiddleware();
// ========================= Redux observable ends=========/// 

// to not to have logger logs  in production and spread the middleware in applyMiddleware method
const middleware = [thunk, epicMiddleware]; // redux-observable middleware
console.log(process.env.NODE_ENV); 
if(process.env.NODE_ENV !== 'production'){
  middleware.push(logger);
}
// read more about env variables here: https://create-react-app.dev/docs/adding-custom-environment-variables/

const composeEnhancers = composeWithDevTools({
});
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Step 2: Exec createStore() method and save it in a variable 
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(...middleware)));  // as part of Step 5.. 

epicMiddleware.run(fetchUserEpic); // as per rxjs6 this is the syntax

// Step 6.2 - Refer the Provider tag - store is provided 
ReactDOM.render(
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
