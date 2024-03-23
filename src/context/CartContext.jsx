import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const onAddToCart = (product) => {
    if (isInCart(product.id)) {
      let newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: product.quantity };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let foundProduct = cart.some((fp) => fp.id == id);
    return foundProduct;
  };
  const removeById = (id) => {
    const productsNotRemoved = cart.filter((p) => p.id !== id);
    setCart(productsNotRemoved);
  };
  const getTotalQuantity = () => {
    const totalItems = cart.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0);
    return totalItems;
  };
  const getQuantityById = (id) => {
    let prod = cart.find((p) => p.id === id);
    if (prod) {
      return prod.quantity;
    } else {
      return prod;
    }
  };

  const data = {
    cart,
    onAddToCart,
    clearCart,
    removeById,
    getTotalQuantity,
    getQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
