import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../../../productsMock";
import { CartContext } from "../../../context/CartContext";
import { dataBase } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  //El useParams toma la id que le mando por url al navegador, la cual es mandada ahí por el React Router
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { onAddToCart, getQuantityById } = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true);
    let productsCollection = collection(dataBase, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((response) => {
        setItem({ ...response.data(), id: response.id });
      })
      .finally(setIsLoading(false));
  }, [id]);

  /*Función para agregar cantidad al carrito. Esta función  y me devuelve
  un logeo de la información del item cuyo detalle se está viendo + una nueva propiedad
  llamada quantity que entra por parámetro al llamar a la función. La pasamosal itemDetail*/
  const addToCart = (quantity = 0) => {
    let itemInfo = {
      ...item,
      quantity,
    };
    onAddToCart(itemInfo);
  };

  const alreadyQuantityInCart = getQuantityById(id); //Del useParams viene como un
  //string con un + lo hago int YA NO MÁS PORQUE AHORA ES UN STRING XD
  return (
    <>
      {isLoading ? (
        <img src="/gif/loadingPBall.gif" alt="Cargando..." />
      ) : (
        <ItemDetail
          item={item}
          addToCart={addToCart}
          initialValue={alreadyQuantityInCart}
        />
      )}
    </>
  );
  //Renderizado condicional. si hay algo guardado en item renderiza
};
