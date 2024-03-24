import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
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
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const isInCart = (id) => {
    let foundProduct = cart.some((fp) => fp.id == id);
    return foundProduct;
  };
  const removeById = (id) => {
    const productsNotRemoved = cart.filter((p) => p.id !== id);
    setCart(productsNotRemoved);
    localStorage.setItem("cart", JSON.stringify(productsNotRemoved));
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
  const totalCartPrice = () => {
    const totalPrice = cart.reduce((acc, prod) => {
      return acc + prod.quantity * prod.price;
    }, 0);
    return totalPrice;
  };

  const data = {
    cart,
    onAddToCart,
    clearCart,
    removeById,
    getTotalQuantity,
    getQuantityById,
    totalCartPrice,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
