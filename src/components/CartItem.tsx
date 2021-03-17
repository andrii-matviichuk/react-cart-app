import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faMinusSquare,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
// Styles
import { CartItemContainer } from '../App.styles';

export type TCartItem = {
  id: number;
  name: string;
  image: string;
  subtitle: string;
  pricePerNight: number;
  qtyOfNights?: number;
  cartItems: any[];
  setCartItems: any;
  calculateTotalPrice: any;
};

const CartItem: React.FC<TCartItem> = ({
  id,
  name,
  image,
  subtitle,
  pricePerNight,
  cartItems,
  setCartItems,
  calculateTotalPrice,
}) => {
  const [qtyOfNights, setQtyOfNights] = useState(0);
  const [priceSum, setPriceSum] = useState(Number(0).toFixed(2));

  const selectOptions = [];
  for (let i = 0; i <= 14; i++) {
    selectOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  useEffect(() => {
    setPriceSum((qtyOfNights * pricePerNight).toFixed(2));
    cartItems.every((item: TCartItem, indx) => {
      if (item.id === id) {
        cartItems[indx].qtyOfNights = qtyOfNights;
        return false;
      }
      return true;
    });
    calculateTotalPrice();
  }, [
    pricePerNight,
    qtyOfNights,
    cartItems,
    id,
    calculateTotalPrice,
    setPriceSum,
  ]);

  // Handlers
  const nightsQtyIncreaseHandler = () => {
    if (qtyOfNights < 14) setQtyOfNights(qtyOfNights + 1);
  };

  const nightsQtyDecreaseHandler = () => {
    if (qtyOfNights > 0) setQtyOfNights(qtyOfNights - 1);
    setPriceSum((qtyOfNights * pricePerNight).toFixed(2));
  };

  const selectNightsQtyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQtyOfNights(+e.target.value);
  };

  const deleteItemHandler = () => {
    const tmpCartItems = [...cartItems];
    cartItems.every((item: TCartItem, indx) => {
      if (item.id === id) {
        tmpCartItems.splice(indx, 1);
        return false;
      }
      return true;
    });
    setCartItems(tmpCartItems);
  };

  return (
    <CartItemContainer>
      <div className="flex_row">
        <img src={image} alt="Hotel view" />
        <div className="flex_column">
          <h3>{name}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="v_line"></div>
        <div className="flex_row jcai_c">
          <FontAwesomeIcon
            icon={faMinusSquare}
            className={`qty cl_gray ${qtyOfNights <= 0 ? 'disabled_btn' : ''}`}
            size="2x"
            onClick={nightsQtyDecreaseHandler}
          />
          <select
            className="cl_darkgray"
            value={qtyOfNights}
            onChange={selectNightsQtyHandler}
          >
            {selectOptions}
          </select>
          <FontAwesomeIcon
            icon={faPlusSquare}
            className={`qty cl_gray ${qtyOfNights >= 14 ? 'disabled_btn' : ''}`}
            size="2x"
            onClick={nightsQtyIncreaseHandler}
          />
        </div>
        <div className="v_line"></div>
        <h4>{priceSum} €</h4>
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="cl_gray trashBtn"
          size="2x"
          onClick={deleteItemHandler}
        />
      </div>
      <div className="h_line"></div>
    </CartItemContainer>
  );
};

export default CartItem;
