import { Button } from "@mui/material";

export const Counter = ({ addBtn, amount, substractBtn, addToCart }) => {
  //Este componente recibe varios argumentos, vienen todos de la lógica de este componente
  //La lógica está en el container.
  return (
    <>
      <Button
        onClick={addBtn}
        // fullWidth={true}
        variant="outlined"
        className={"add-btn"}
      >
        SUMAR
      </Button>
      <h4>{amount}</h4>
      <Button
        onClick={substractBtn}
        // fullWidth={true}
        variant="outlined"
        className={"sub-btn"}
      >
        RESTAR
      </Button>
      <button onClick={addToCart}>Agregar al carrito</button>
    </>
  );
};
