import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const CartItem = () => {
  return (
    <div className="flex_row">
      <img src="" alt="Hotel view" />
      <div className="flex_column">
        <h3>Hotel name</h3>
        <p>Hotel description</p>
      </div>
      <div className="v_line"></div>
      <div className="flex_row">
        <FontAwesomeIcon icon={faMinusSquare} size="2x" />
        <p>5</p>
        <FontAwesomeIcon icon={faPlusSquare} size="2x" />
        <p>78.00 €</p>
      </div>
    </div>
  );
};

export default CartItem;
