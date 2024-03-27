import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const CartView = () => {
  const { cart, clearCart, removeById, totalCartPrice } =
    useContext(CartContext);
  const total = totalCartPrice().toFixed(2);

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
      <h2>TOTAL: $ {total}</h2>

      {cart.length > 0 ? (
        <>
          <button onClick={clearCart}>Vaciar Carrito</button>
          <button>
            <Link to={"/checkout"}>Finalizar la compra.</Link>
          </button>
        </>
      ) : (
        <button className="cart-view-btn" disabled>
          Finalizar la compra.
        </button>
      )}
    </div>
  );
};
