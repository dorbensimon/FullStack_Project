/*in here is where i going to make out http request
 to our backend to get the products details and add it to the cart*/
 import * as actionTypes from '../constants/cartConstants'
 //axios is going to help us make our ajax requests
 import axios from 'axios'

 export const addToCart=(id,qty)=>async(dispatch,getState)=>{
   const {data}=await axios.get(`/api/products/${id}`)  
   dispatch({
       type:actionTypes.ADD_TO_CART,
       payload:{
           product:data._id,
           name:data.name,
           imageUrl:data.imageUrl,
           price:data.price,
           countInStock:data.countInStock,
           qty
       }
   })
   //saved this card to local storage(we give the name of cart)
   localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))//we goin to the cart reducer and we get the cartItems and we add taht to the localsorage

 }

export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    })
    localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems))//we goin to the cart reducer and we get the cartItems and we add taht to the localsorage
}