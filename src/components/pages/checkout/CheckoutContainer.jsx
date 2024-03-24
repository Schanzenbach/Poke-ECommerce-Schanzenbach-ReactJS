import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";

export const CheckoutContainer = () => {
  const { cart, totalCartPrice, clearCart } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [orderId, setOrderId] = useState(null);
  const captureUserInfo = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();
    let order = {
      buyer: userInfo,
      items: cart,
      total: totalCartPrice(),
    };
    const ordersCollection = collection(dataBase, "orders");
    const productsCollection = collection(dataBase, "products");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
    cart.forEach((item) => {
      const refDoc = doc(productsCollection, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
    clearCart();
  };
  return (
    <>
      <Checkout
        captureUser={captureUserInfo}
        submitForm={submitForm}
        orderId={orderId}
      />
    </>
  );
};
