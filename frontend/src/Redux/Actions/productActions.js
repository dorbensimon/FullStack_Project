import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

//n here we do all the http request
export const getProducts=()=>async(dispatch)=>{
    try {
        dispatch({type:actionTypes.GET_PRODUCTS_REQUEST})

        //the req to our qpi
        const {data}=await axios.get('/api/products')
        dispatch({
            type:actionTypes.GET_PRODUCTS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:actionTypes.GET_PRODUCTS_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })   
    }
}

export const getProductsDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})
        const {data}=await axios.get(`/api/products/${id}`)
        dispatch({
            type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const removeProductDetails=()=>(dispatch)=>{
    try {
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_RESET})
        
    } catch (error) {
        
    }
}


