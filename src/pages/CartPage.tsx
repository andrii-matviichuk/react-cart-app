import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
// Components
import CartItem, { TCartItem } from '../components/CartItem';
// Styles
import { CartPageContainer } from '../App.styles';

const CartPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingError, setIsFetchingError] = useState(false);
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(Number(0).toFixed(2));

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await axios.get(
          'https://604fa6a9c20143001744d952.mockapi.io/api/v1/hotels'
        );
        if (data.status === 200) {
          setCartItems(data.data);
        } else {
          setIsFetchingError(true);
        }
      } catch (e) {
        setIsFetchingError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) setTotalPrice(Number(0).toFixed(2));
  }, [cartItems]);

  const calculateTotalPrice = () => {
    setTotalPrice(
      cartItems
        .reduce(
          (ac: number, item) =>
            ac + (item.qtyOfNights ? item.qtyOfNights : 0) * item.pricePerNight,
          0
        )
        .toFixed(2)
    );
  };

  return (
    <CartPageContainer>
      <div className="flex_column">
        {cartItems.length === 0 && !isFetchingError ? (
          <h2>No items in cart.</h2>
        ) : null}
        {isFetchingError ? <h2>Something went wrong! Try again!</h2> : null}
        {isLoading ? (
          <Skeleton count={3} height={66.67} />
        ) : (
          cartItems.map((item: TCartItem) => (
            <CartItem
              id={item.id}
              name={item.name}
              image={item.image}
              subtitle={item.subtitle}
              pricePerNight={item.pricePerNight}
              key={item.id}
              cartItems={cartItems}
              calculateTotalPrice={calculateTotalPrice}
              setCartItems={setCartItems}
            />
          ))
        )}
        <p className="total_price">{totalPrice} €</p>
        <Link
          to={{
            pathname: '/payment',
            state: totalPrice,
          }}
          className="btn"
        >
          Buy
        </Link>
      </div>
    </CartPageContainer>
  );
};

export default CartPage;
