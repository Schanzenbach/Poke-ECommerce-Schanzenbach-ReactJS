import { ProductCard } from "../../common/productcard/ProductCard";
import "./ItemList.css";
import React from "react";

export const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="caja">
      {items.map(({ id, name, price, img }) => {
        //Acá podría desestructurar item para no tener que poner item.tal cada vez pero pereza
        /*
      Vas a agarrar lo que te dieron en items y vas a iterar, por cada item vas a 
      hacer una productCard dándole los siguientes keys de item*/
        return (
          <ProductCard key={id} id={id} name={name} price={price} img={img} />
        );
      })}
    </div>
  );
};
