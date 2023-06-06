const Button = ({ children, ...otherProps }) => {
  return (
    <button
      className='rounded-lg w-full mt-4 py-2 px-4 transition-all ease-in font-bold bg-blue-200 hover:scale-105 active:scale-100'
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
