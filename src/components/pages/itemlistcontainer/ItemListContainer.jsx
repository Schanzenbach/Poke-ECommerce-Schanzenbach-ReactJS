import React, { useContext, useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FilterInputContext } from "../../../context/FilterInputContext.jsx";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { productsName } = useContext(FilterInputContext);
  useEffect(() => {
    setIsLoading(true);

    let productsCollection = collection(dataBase, "products");
    let consulta = productsCollection;
    let filteredArray = [];
    if (productsName !== "") {
      getDocs(consulta)
        .then((res) => {
          const arrayWithNames = [];
          res.docs.forEach((p) => {
            arrayWithNames.push({ ...p.data(), id: p.id });
            return arrayWithNames;
          });
          arrayWithNames.forEach((e) => {
            const name = e.name.toLowerCase();
            if (name.includes(productsName)) {
              filteredArray.push(e);
            }
          });
          setItems(filteredArray);
        })
        .finally(setIsLoading(false));
    } else if (category) {
      let filteredByCategoryProd = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = filteredByCategoryProd;
      getDocs(consulta)
        .then((response) => {
          let productsArray = response.docs.map((e) => {
            return { ...e.data(), id: e.id };
          });
          setItems(productsArray);
        })
        .finally(setIsLoading(false));
    } else {
      getDocs(consulta)
        .then((response) => {
          let productsArray = response.docs.map((e) => {
            return { ...e.data(), id: e.id };
          });
          setItems(productsArray);
        })
        .finally(setIsLoading(false));
    }
  }, [category, productsName]);

  return (
    <>
      {items !== null ? (
        <ItemList items={items} />
      ) : (
        <div className="caja">
        <img className="loading" src="/gif/loading.gif" alt="Cargando..." />
        </div>
      )}
    </>
  );
};
