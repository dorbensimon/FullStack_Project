import './ProductScreen.css';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductsDetails } from '../Redux/Actions/productActions';
import { addToCart } from '../Redux/Actions/cartActions';

const ProductScreen = ({ match, history }) => {
  const [qty, setqty] = useState(1);

  const dispatch = useDispatch();


  const ProductsDetails = useSelector((state) => state.getProductsDetails);

  const { loading, error, product } = ProductsDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductsDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler=()=>{
      dispatch(addToCart(product._id,qty));
      history.push("/cart");
  }
  




  return (
    <div className="productscreen">
      {loading ? (
        <h2>loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt="" />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>price: ${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                price:<span> ${product.price}</span>
              </p>
              <p>
                status:<spam>In Stock</spam>
              </p>
              <p>
                qty
                <select value={qty} onChange={(e) => setqty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>Add to cart</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
