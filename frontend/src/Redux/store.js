/*where all the data keeps place ,
 where all the things gonna be stores.
 @basically a store is actully a combination of reducers*/
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import{cartReducer} from './reducers/cartReducers';
import {getProductsReducer,getProductDetailsReducer}from './reducers/productReducers'

//create our reducer
const reducer =combineReducers({
  //in here we have all are reducers
  cart:cartReducer,
  getProducts:getProductsReducer,
  getProductsDetails:getProductDetailsReducer
});


// it hepls us to make asynchronous request in our actions which i cant do othewise with redux
const middleware=[thunk];

//to refresh 
const cartfromlocalstorage=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[]

const INITIAL_STATE={
  cart:{
    cartItems:cartfromlocalstorage
  }
}

//create our store
const store =createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;