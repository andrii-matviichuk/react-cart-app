import { useEffect, useState } from 'react';
// Components
import CartItem from '../components/CartItem';
// Styles
import { CartPageContainer } from '../App.styles';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {}, []);
  return (
    <CartPageContainer>
      <div className="flex_column">
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="h_line"></div>
        <p className="total_price">225$</p>
        <button>Buy</button>
      </div>
    </CartPageContainer>
  );
};

export default CartPage;
