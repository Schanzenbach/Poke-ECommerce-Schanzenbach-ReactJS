import { useState } from "react";
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({ name: "", lastName: "" });
  const captureUserInfo = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(userInfo);
  };
  return (
    <>
      <Checkout captureUser={captureUserInfo} submitForm={submitForm} />
    </>
  );
};
