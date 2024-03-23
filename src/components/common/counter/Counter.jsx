export const Counter = ({ addBtn, amount, substractBtn, addToCart }) => {
  //Este componente recibe varios argumentos, vienen todos de la lógica de este componente
  //La lógica está en el container.
  return (
    <>
      <button onClick={addBtn}>SUMAR</button>
      <h4>{amount}</h4>
      <button onClick={substractBtn}>RESTAR</button>
      <button onClick={addToCart}>Agregar al carrito</button>
    </>
  );
};
