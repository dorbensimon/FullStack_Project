import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = (props) => {

    const cart=useSelector(state=>state.cart);

    const{cartItems}=cart;

    const getCartCount=()=>{
        return(
            cartItems.reduce((qty,item)=>Number(qty+item.qty),0)//it well start with 0
        )
    }



    return (
        <div>
        <nav className={"navbar"}>
            {/*logo*/}
            <div className="navbar__logo">
                <Link to="/" className="logo_link"> 
                <i href='https://dryicons.com/free-graphics/logo'></i>{/*icon*/}
                </Link>
            </div>

            {/*links*/}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart_link">
                    <i class="fas fa-shopping-cart"></i>{/*icon*/}
                        <span>{/*<div> is a block-level element and <span> is an inline element*/}
                        Cart
                        <span className="cartlogo__badg">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>

            {/*hamburger menu*/}
            <div className="hamburger__menu" onClick={props.ClickHamburger}>
            <div></div>
            <div></div>
            <div></div>
            </div>

        </nav>
        </div>
    )
}

export default Navbar
