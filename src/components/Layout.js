import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <Navbar />
      <main className='mt-10'>{children}</main>
    </div>
  );
};

export default Layout;
