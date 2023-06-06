import { Link } from 'react-router-dom';
import Button from './Button';
import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => addItemToCart(product);

  return (
    <li className='rounded-lg p-6 mx-auto shadow-lg hover:shadow-2xl transition-all ease-in-out'>
      <Link to={`/product/${product.id}`}>
        <img
          className='object-cover max-w-[250px] mx-auto h-[300px]'
          src={product.image}
          alt={product.title}
        />
        <div className='max-w-[280px]'>
          <h3 className='text-xl font-bold my-4 line-clamp-2 min-h-[60px]'>
            {product.title}
          </h3>
          <p className='text-right text-2xl'>
            $ {Number(product.price).toFixed(2)}
          </p>
          <p className='text-base mt-4 min-h-[100px] line-clamp-4'>
            {product.description}
          </p>
        </div>
      </Link>
      <Button onClick={addToCart}>Add To Cart</Button>
    </li>
  );
};

export default ProductCard;
