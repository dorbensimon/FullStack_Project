import './CartScreen.css';
import {useSelector,useDispatch}from 'react-redux'
import { Link } from 'react-router-dom';

//components
import CartItem from '../components/CartItem';
//actions
import {addToCart,removeFromCart}from '../Redux/Actions/cartActions'

const CartScreen = () => {

    const dispatch = useDispatch();


    const cart = useSelector((state) => state.cart);
    const{cartItems}=cart;

    const qtyChangeHandler=(id,qty)=>{
        dispatch(addToCart(id,qty))

    }

    const removeFromtheCart=(id)=>{
        dispatch(removeFromCart(id))
    }

    const getCartCount=()=>{
        return(
            cartItems.reduce((qty,item)=> Number(item.qty)+qty,0)
        )
    }

    const getCartSubTotal = () => {
        return(
            cartItems.reduce((price, item) => price + item.price * item.qty,0).toFixed(2)//זה נותן לי את הנקודה עם 2 אפסים
        )
      };

 
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shoping cart</h2>
                {
                    cartItems.length===0 ?  (//אין שום דבר להראות והעגלה ריקה והוא יחזור לדף הבית
                        <div>
                            Your Cart is Empty <Link to={"/"}>Go Back</Link>
                        </div>
                        ):
                        (
                            cartItems.map(item=><CartItem item={item} qtyChangeHandler={qtyChangeHandler} removeFromtheCart={removeFromtheCart} />)
                        )
                }
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>
                        subtitlre({getCartCount()}) item
                    </p>
                    <p>${getCartSubTotal()}</p>
                </div>
                <div>
                    <button>Procceed to chackout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
