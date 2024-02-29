import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../../../productsMock";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    //nuestro getProduct recibe como argumento el id que tengo del useParams
    getProduct(parseInt(id)).then((response) => setItem(response));
  }, []);
  return <>{item && <ItemDetail item={item} />}</>;
  //Renderizado condicional. si hay algo guardado en item renderiza
};
