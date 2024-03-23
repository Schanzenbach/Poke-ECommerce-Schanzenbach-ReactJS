import { Link } from "react-router-dom";
import "./Cart.css";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const Cart = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let totalItemsInCart = getTotalQuantity();
  return (
    <div className="cart-container">
      <Link to={"/cart"}>
        <TiShoppingCart size="6vh" />
      </Link>
      <p>{totalItemsInCart}</p>
    </div>
  );
};
