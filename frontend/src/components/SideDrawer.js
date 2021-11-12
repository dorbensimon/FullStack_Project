import './SideDrawer.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';



const SideDrawer = ({show,ClickHamburger}) => {

    const cart=useSelector(state=>state.cart);

    const{cartItems}=cart;

    const getCartCount=()=>{
        return(
            cartItems.reduce((qty,item)=>Number(qty+item.qty),0)//it well start with 0
        )
    }


    const SideDrawerClass=["SideDrawer"];
    if(show){
        SideDrawerClass.push("show")
    }
    return (
        <div className={SideDrawerClass.join(" ")}>
            <ul className={"sidedrarwe_links"} >
                <li>
                    <Link to="/cart" onClick={ClickHamburger}>
                    <li className="fas fa-shopping-cart"></li>
                    <span>
                        Cart <span className="sidedrawer__cartbadge">{getCartCount()}</span>
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={ClickHamburger}>Shop</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default SideDrawer
