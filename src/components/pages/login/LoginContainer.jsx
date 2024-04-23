import { useState, useContext, useEffect } from "react";
import { Login } from "./Login";
import {
  authFb,
  dataBase,
} from "../../../firebaseConfig"; /* trae el initialiaze con la config de firebase y el getAuth */
import {collection, } from "firebase/firestore"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { LoginContext } from "../../../context/LoginContext";
/*trae el método  onauthstatechanged, y los demás del mismo lado que sale el getAuth*/

export const LoginContainer = () => {
  //traigo contexto del login pa saber si está logged alguien o no, junto a la fn logout.
  const { isLogged, logout } = useContext(LoginContext);

  /*Variable conectada a la función toggleLoginType*/
  const [loginOrSignin, setLoginOrSignin] = useState(false);

  /* Variables de estado que contienen el objeto usuario con su mail y password */
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  /* función que cambia un booleano para que el botón cambie por iniciar sesión o registrarse */
  const toggleLoginType = (event) => {
    event.preventDefault();
    setLoginOrSignin(!loginOrSignin);
  };

  /* función que captura la información del usuario de los inputs y luego los guarda como propiedades de objeto
 en la variable de estado userInfo. Importante que los names de los input sean igual que el nombre de la propiedad
 de objeto que quiero crear. */
  const captureUserInfo = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  /* si la variable de estado es true para registrarse entonces uso el método de firebase para crear usuario
  sino, uso el para loggear.  */
  const onSubmit = async (e) => {
    e.preventDefault();
    if (loginOrSignin) {
      await createUserWithEmailAndPassword(
        authFb,
        userInfo.email,
        userInfo.password
      );
    } else {
      await signInWithEmailAndPassword(
        authFb,
        userInfo.email,
        userInfo.password
      );
    }
  };

  return (

        <Login
          loginOrSignin={loginOrSignin}
          toggleLoginType={toggleLoginType}
          captureUserInfo={captureUserInfo}
          submit={onSubmit}
          logout={logout}
          isLogged={isLogged}
        />
  );
};
