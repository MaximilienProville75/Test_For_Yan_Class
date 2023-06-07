import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../request';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { CartContext } from '../../contexts/cartContext';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then(res => setProduct(res));
  }, [id]);

  return (
    <Layout>
      <div className='flex flex-col gap-20 justify-center md:flex-row items-center'>
        <img className='max-w-sm' src={product.image} alt={product.title} />
        <div className='flex-1 flex flex-col gap-6 max-w-sm justify-center'>
          <h2 className='text-3xl'>{product.title}</h2>
          <p className='text-3xl font-bold mt-4'>$ {product.price}</p>
          <p className='text-lg'>{product.description}</p>
          <Button
            onClick={() => {
              addItemToCart(product);
            }}>
            Add To Cart
          </Button>
          <Link to={'/'} className='text-base text-slate-400'>
            {'<< All Products'}
          </Link>
        </div>
      </div>
    </Layout>
  );
}
