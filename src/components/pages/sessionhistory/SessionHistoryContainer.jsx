import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";
import { SessionHistory } from "./SessionHistory";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
import { set } from "firebase/database";

export const SessionHistoryContainer = () => {
  const { loggedEmail } = useContext(LoginContext);
  const [currentEmail, setCurrentEmail] = useState();

  //5) Termina la función que traje de contexto, que era asíncrona, entonces se re renderiza el componente lanzandose de nuevo este useEffect
  const [allOrders, setAllOrders] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //no inicia porque aún no existe loggedEmail, pero existirá antes de getDocs y esto se re triggerea. 
    if (loggedEmail) {
     //2) inicia el useEffect.
      let ordersCollection = collection(dataBase, "orders");
     //3) Termina la función collection. 
     //Antes de getDocs tiene prioridad la función del contexto, ya que ambas son asíncronas. Sigue getDocs.then y .finally
      getDocs(ordersCollection)
        .then((response) => {
          let ordersArray = response.docs.map((e) => {
            return { ...e.data(), id: e.id };
          });
          setAllOrders(ordersArray);
        })
        .finally(() => {
            setCurrentEmail(loggedEmail); //Este acá porque sé que para esta altura ya tengo logged email.
            setLoading(false);
        });
    }
   
  }, [loggedEmail]);

  //1) Primero se ejecuta el componente completo, luego los useEffect.
  //8) Al actualizarse las variables de estado en el getDocs se vuelve a renderizar el componente volviendo a ejecutar todo fuera de los useEffect
  // (A menos que cambia alguna de sus variables de dependencias)
  if (allOrders.length > 0) {
    console.log(allOrders[0].buyer.email, currentEmail);
  }

  return (
    <>
      {loading ? (
          <h2>cargando...</h2>
        ) : (
          <SessionHistory/>
      )}
    </>
  );
};
