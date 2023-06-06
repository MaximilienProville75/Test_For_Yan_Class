import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCounts } = useContext(CartContext);
  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div
      className='flex h-full cursor-pointer items-center justify-center p-2 font-bold transition-colors'
      onClick={handleCartOpen}>
      <span>Cart: {cartCounts}</span>
    </div>
  );
};

export default CartIcon;
