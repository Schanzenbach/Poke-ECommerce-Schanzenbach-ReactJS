import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";
import { SessionHistory } from "./SessionHistory";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";

export const SessionHistoryContainer = () => {
  const { loggedEmail } = useContext(LoginContext);
  /*4to Entra a existir loggedEmail del LoginContext, el cual no es asíncrono per se, 
  pero tiene una función asíncrona para crear el loggedEmail. Al llegar esta variable, 
  se vuelve a renderizar el componente, volviendo a triggerear todo. */
  const [currentEmail, setCurrentEmail] = useState();

  const [allOrders, setAllOrders] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*2do  Inicia el primer useEffect, al ver que no existe loggedEmail termina, se re
    renderizará cuando sea que cambie loggedEmail. 
    6to Inicia por segunda vez el primer userEffect, ya que cambió loggedEmail, y como 
    ahora sí se cumple el condicional ejecuta el código dentro. 
    */
    if (loggedEmail) {
      let ordersCollection = collection(dataBase, "orders");
      /*collection no es asíncrono dice chatgpt así que se ejecuta primero que todo y trae 
      la colección orders de la base de datos. Existe enseguida. */
      getDocs(ordersCollection).then((response) => {
        /*7mo getDocs es asíncrono pero ya empieza ahora, ya que generalmente tardaría
          más que el loggedEmail en ser traído, pero como tiene el condicional, sigue
          en orden.
           */
        let ordersArray = response.docs.map((e) => {
          return { ...e.data(), id: e.id };
        });
        /* 8vo se setean las variables de estado, esto no les da el valor enseguida,
          primero se re renderiza el componente por tercera vez.
         */
        setAllOrders(ordersArray);
        setCurrentEmail(loggedEmail);
      });
    }
  }, [loggedEmail]);

  useEffect(() => {
    /*3ero Inicia el segundo useEffect, la condición no se cumple porque allOrders se
      setea al terminar el primer useEffect por lo tanto no tiene el array aún.
      10mo inicia por segunda vez el segundo useEffect, ahora el condicional se cumple
      por lo que se setea userOrders y Loading. 
      Problema, esto no significa que si hace 
      otra compra, no se verá reflejada porque no la trae en el primer useEffect?
      */
    if (allOrders.length > 0 && currentEmail) {
      let filteredArray = allOrders.filter((e) => {
        return e.buyer.email == currentEmail;
      });
      let itemsArray = filteredArray.map((e) => {
        return { items: e.items, total: e.total, id: e.id, date: e.date };
        /*itemsArray es un array con objetos, cada objeto tiene 2 propiedades, id e items
          items es un array que dentro tiene objetos productos. 
          */
      });
      /*11vo se setean estas variables de estado, por lo que se vuelve a renderizar el código
        sin entrar a este useEffect. */
      setUserOrders(itemsArray);
      setLoading(false);
      /*Estas variables aún no tienen valor hasta que se re renderiza.  */
    }
  }, [allOrders]);
  /*1er render. Se ejecuta primero todo lo que está fuera de los useEffect en el cuerpo
    del componente. Esto se vuelve a ejecutar con cada renderizado. Aún no está definida 
    ninguna variable de estado más que por el valor inicial dado en el useState.
    5to Segundo render. Se renderiza de nuevo el componente por el cambio de loggedEmail
    y se ejecuta todo el código de nuevo, chequea si las variables de estado de los 
    useEffect han cambiado. Aún no existen currentEmails, allOrders, userOrders...
    9no al ser seteadas las variables de estado se renderiza el componente por tercera vez,
    ahora existen allOrders y currentEmail. Como loggedEmail no cambiará, el primer useEffect
    No volverá a ejecutarse. 
    12voSe renderiza por cuarta vez el componente, ahora ya existen todas las variables de estado
    y loading es false. 
    */
  const [isExpanded, setIsExpanded] = useState(null);
  const toggleExpanded = (orderId) =>{
    if (isExpanded===orderId) {
      setIsExpanded(null);
    } else {
      setIsExpanded(orderId);
    };
  };
  return (
    <>
      {loading ? (
        <div>cargando...</div>
      ) : (
        <SessionHistory 
        userOrders={userOrders}
        isExpanded={isExpanded}
        toggleExpanded={toggleExpanded} />
      )}
    </>
  );
};
