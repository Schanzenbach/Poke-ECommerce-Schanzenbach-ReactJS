import "./Cart.css";
import { TiShoppingCart } from "react-icons/ti";



export const Cart = () => {
  return (
        <div className="cart-container">
            <a href=""><TiShoppingCart size="6vh"/></a>
            <p>0</p>
        </div>
  )
}
