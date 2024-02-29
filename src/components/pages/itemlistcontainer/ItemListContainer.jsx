import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../productsMock.js";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const dataFetch = new Promise((resolve, reject) => {
      resolve(products);
    }); //Acá fetcheo mi propia base con una promesa resuelta por mi xd
    dataFetch //Acá eso que me traje lo manipulo
      .then((response) => {
        setItems(response); //Si hay éxito en la promesa tomo el response y lo meto en items
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemList items={items} />;
};
