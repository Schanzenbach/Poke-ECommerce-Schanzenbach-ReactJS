import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const CartView = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);
  return (
    <div>
      {cart.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <h4>Precio unitario: {p.price}</h4>
          <h4>Cantidad: {p.quantity}</h4>
          <button onClick={() => removeById(p.id)}>X</button>
        </div>
      ))}
      <button onClick={clearCart}>Vaciar Carrito</button>
      <button>
        <Link to={"/checkout"}>Finalizar la compra.</Link>
      </button>
    </div>
  );
};
