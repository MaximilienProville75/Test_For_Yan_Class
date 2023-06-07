import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const Navbar = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <div className='sticky top-0 p-6 flex items-center bg-blue-200 justify-between  mx-auto'>
      <Link to={'/'} className='text-3xl font-bold cursor-pointer'>
        Shop
      </Link>
      <CartIcon />
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default Navbar;
