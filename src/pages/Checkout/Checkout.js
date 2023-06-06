import { useContext } from 'react';
import Layout from '../../components/Layout';
import { CartContext } from '../../contexts/cartContext';
import CheckoutItem from '../../components/CheckoutItem';

const Checkout = () => {
  const { cartItems, clearAllItemsFromCart, cartTotal } =
    useContext(CartContext);

  return (
    <Layout>
      <h2 className='text-3xl font-bold mb-10'>Check Out</h2>
      <span
        className='block text-end text-slate-400 underline cursor-pointer'
        onClick={() => clearAllItemsFromCart()}>
        Clear All
      </span>
      <ul className='flex flex-col gap-4'>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <p className='mt-8 text-end text-2xl font-bold'>Total: $ {cartTotal}</p>
    </Layout>
  );
};

export default Checkout;
