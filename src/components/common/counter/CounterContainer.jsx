import React, { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({ stock, addToCart, initialValue = 1 }) => {
  /* Recibe el stock del item y la función, luego a esa función la paso al contador
  pero con el argumento de quantity= amount que tenga en el contador  */
  const [amount, setAmount] = useState(initialValue);

  const addOne = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };
  const subOne = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  return (
    <>
      <Counter
        addBtn={addOne}
        substractBtn={subOne}
        amount={amount}
        addToCart={() => addToCart(amount)}
      />
    </>
  );
};
