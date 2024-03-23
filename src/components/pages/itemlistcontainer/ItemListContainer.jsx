import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { getProducts } from "../../../productsMock.js";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    let productsCollection = collection(dataBase, "products");
    let consulta = productsCollection;

    if (category) {
      let filteredByCategoryProd = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = filteredByCategoryProd;
    }

    getDocs(consulta)
      .then((response) => {
        let productsArray = response.docs.map((e) => {
          return { ...e.data(), id: e.id };
        });
        setItems(productsArray);
      })
      .finally(setIsLoading(false));
  }, [category]);

  return (
    <>
      {isLoading ? (
        <img src="/gif/loading.gif" alt="Cargando..." />
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};
