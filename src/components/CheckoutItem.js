import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearOneItemFromCart } =
    useContext(CartContext);
  return (
    <li className='grid gap-4 grid-cols-4 text-xl px-6 py-4 border-b-2 border-slate-200 items-center'>
      <span className='max-w-[480px] overflow-x-hidden line-clamp-3'>
        {cartItem.title}
      </span>
      <div className='flex gap-5 justify-self-end'>
        <span onClick={() => removeItemFromCart(cartItem)}>-</span>
        <span>{cartItem.quantity}</span>
        <span onClick={() => addItemToCart(cartItem)}>+</span>
      </div>
      <span className='justify-self-end'>
        $ {Number(cartItem.price) * cartItem.quantity}
      </span>
      <span
        onClick={() => clearOneItemFromCart(cartItem)}
        className='justify-self-center'>
        X
      </span>
    </li>
  );
};

export default CheckoutItem;
