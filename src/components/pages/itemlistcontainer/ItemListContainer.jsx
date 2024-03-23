import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { getProducts } from "../../../productsMock.js";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        if (category) {
          const filteredProducts = response.filter(
            (p) => p.category == category
          );
          setItems(filteredProducts);
        } else {
          setItems(response);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error: ", error);
        setIsLoading(false);
      });
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
