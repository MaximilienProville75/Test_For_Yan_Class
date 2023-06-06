import { createContext, useEffect, useState } from 'react';

const addItem = (cartItems, product) => {
  // Find if is an exist item
  const existCartItem = cartItems.find(cartItem => cartItem.id === product.id);

  // If item exist, increase the quantity
  if (existCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If is a new item, return a new array with the added item
  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCounts: 0,
  clearAllItemsFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounts, setCartCounts] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce(
      (count, cartItem) => count + cartItem.quantity,
      0
    );
    setCartCounts(newCount);
  }, [cartItems]);

  // Add
  const addItemToCart = product => {
    setCartItems(addItem(cartItems, product));
  };

  // Remove

  // Clear All
  const clearAllItemsFromCart = () => {
    setCartItems([]);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    addItemToCart,
    cartCounts,
    clearAllItemsFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
