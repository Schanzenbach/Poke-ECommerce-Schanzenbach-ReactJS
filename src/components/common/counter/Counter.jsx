import "./Counter.css";
import { Button } from "@mui/material";

export const Counter = ({ addBtn, amount, substractBtn, addToCart }) => {
  //Este componente recibe varios argumentos, vienen todos de la lógica de este componente
  //La lógica está en el container.
  return (
    <>
      <div className="counter-container">
        <Button
          onClick={addBtn}
          variant="outlined"
          className="add-btn"
          size="small"
        >
          SUMAR
        </Button>
        <h2>{amount}</h2>
        <Button
          onClick={substractBtn}
          variant="outlined"
          className="sub-btn"
          id="sub-btn"
        >
          RESTAR
        </Button>
      </div>
      <div className="cart-btn-cont">
        <Button
          onClick={addToCart}
          fullWidth={true}
          variant="outlined"
          className="cart-btn"
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};
