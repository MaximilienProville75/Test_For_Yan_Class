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

const removeItem = (cartItems, product) => {
  // Find the item to remove
  const existCartItem = cartItems.find(cartItem => cartItem.id === product.id);

  // Check if the quantity is 1, if is remove the item from list
  if (existCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== product.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItem = (cartItems, product) => {
  return cartItems.filter(cartItem => product.id !== cartItem.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCounts: 0,
  cartTotal: 0,
  clearOneItemFromCart: () => {},
  clearAllItemsFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounts, setCartCounts] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Update cartCount
  useEffect(() => {
    const newCount = cartItems.reduce(
      (count, cartItem) => count + cartItem.quantity,
      0
    );
    setCartCounts(newCount);
  }, [cartItems]);

  // Update cartTotal
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (count, cartItem) => count + cartItem.quantity * Number(cartItem.price),
      0
    );
    setCartTotal(newTotal.toFixed(2));
  }, [cartItems]);

  // Add
  const addItemToCart = product => {
    setCartItems(addItem(cartItems, product));
  };

  // Remove
  const removeItemFromCart = product => {
    setCartItems(removeItem(cartItems, product));
  };

  // Clear one item
  const clearOneItemFromCart = product => {
    setCartItems(clearItem(cartItems, product));
  };

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
    cartTotal,
    removeItemFromCart,
    clearOneItemFromCart,
    clearAllItemsFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
