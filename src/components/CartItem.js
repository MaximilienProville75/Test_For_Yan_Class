const CartItem = ({ cartItem }) => {
  return (
    <li className='flex justify-between px-6 py-4 bg-blue-300'>
      <span className='max-w-[150px] overflow-x-hidden line-clamp-3'>
        {cartItem.title}
      </span>
      <span>{cartItem.quantity}</span>
    </li>
  );
};

export default CartItem;
