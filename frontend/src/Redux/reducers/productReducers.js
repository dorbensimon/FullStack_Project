import * as actionTypes from '../constants/productConstants';

export const getProductsReducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_REQUEST:
            return{
                loading:true,//we set the loading to ture for the application dont carsh
                products:[]
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return{
                loading:false,
                products:action.payload//from are backend we will rceive array and then we just populate this products with the array we gut from the backend
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export const getProductDetailsReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return{
                loading :true,
            }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return{
                product:{}
            }
        default:
            return state;
    }
}
