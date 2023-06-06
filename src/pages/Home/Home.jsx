import { useEffect, useState } from 'react';
import { getAllProducts } from '../../request';
import ProductCard from '../../components/ProductCard';
import Layout from '../../components/Layout';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(res => setProducts(res));
  }, []);

  return (
    <Layout>
      <ul className='grid gap-3 md:grid-cols-3'>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ul>
    </Layout>
  );
}
