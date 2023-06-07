import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const CartItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  return (
    <li className='flex justify-between px-6 py-4 bg-blue-300'>
      <span className='max-w-[150px] overflow-x-hidden line-clamp-3'>
        {cartItem.title}
      </span>
      <div className='flex gap-1'>
        <span onClick={() => removeItemFromCart(cartItem)}>-</span>
        <span>{cartItem.quantity}</span>
        <span onClick={() => addItemToCart(cartItem)}>+</span>
      </div>
    </li>
  );
};

export default CartItem;
