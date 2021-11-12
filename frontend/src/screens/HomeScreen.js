import './HomeScreen.css';
import { useEffect } from 'react';
import {useSelector,useDispatch}from 'react-redux'

//components
import Product from '../components/Product';

//actions
import {getProducts as listProducts} from '../Redux/Actions/productActions'
import {cartActions} from '../Redux/Actions/cartActions'



const HomeScreen = () => {

    const dispatch=useDispatch();

    const getProducts=useSelector(state=>state.getProducts)

    const{products,loading,error}=getProducts;

    useEffect(()=>{
        dispatch(listProducts())

    },[dispatch])

    return (
        <div className="homescreen">
           <h2 className="homescreen_title"> home</h2>
           <div className="homescreen__product">
               {
                   loading ? <h2>loading...</h2> : error ? <h2>{error}</h2>: products.map(product=>(
                       <Product
                        key={product._id}
                        productId={product._id}
                        imageUrl={product.imageUrl}
                        description={product.description}
                        name={product.name}
                        price={product.price}/>
                   ))
               }
               
           </div>
        </div>
    )
}

export default HomeScreen
