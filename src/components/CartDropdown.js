import { useContext } from 'react';
import Button from './Button';
import { CartContext } from '../contexts/cartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems, clearAllItemsFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClearAll = () => clearAllItemsFromCart();

  return (
    <div className='w-[320px] h-[400px] absolute bg-white border border-blue-900 right-0 top-full z-10 p-4 overflow-auto'>
      <ul className='flex flex-col gap-2'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <Button
        onClick={() => {
          navigate('/checkout');
        }}>
        Check Out
      </Button>
      <span
        className='block text-center mt-4 underline text-slate-400 cursor-pointer'
        onClick={handleClearAll}>
        Clear All
      </span>
    </div>
  );
};

export default CartDropdown;
