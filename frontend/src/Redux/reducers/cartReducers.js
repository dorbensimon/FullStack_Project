import * as actionTypes from '../constants/cartConstants';

//my reducr
export const cartReducer=(state={cartItems:[]},action)=>{
    //now we want to chack the actions that are dispatches לשג
    switch(action.type){

        //--------------------------------------------ADD_TO_CART---------------------------------------------------
        case actionTypes.ADD_TO_CART:
            //in our action.payload we'll get the item we would like to add 
            const item =action.payload

            //we want to chack if this item already exists in the cart
            //its chack if the id of x is equal to the id of the new item that we just add
            const existItem=state.cartItems.find((x)=>x.product===item.product)
            
            //if the product is aulredy in our cart
            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map((x)=> x.product===existItem.product ? item : x)
                }
            }
            //if the item was not found/ (it the first time it added to the cart)
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }

        //--------------------------------------------REMOVE_FROM_CART---------------------------------------------------

            case actionTypes.REMOVE_FROM_CART:
                return{
                    ...state,
                    //we add evrething to our new array without that product
                    cartItems:state.cartItems.filter((x)=>x.product !==action.payload)

                }
        default: 
            return state //is return the cartItems by defult

    }
}