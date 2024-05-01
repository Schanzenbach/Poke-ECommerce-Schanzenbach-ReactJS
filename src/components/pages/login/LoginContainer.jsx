import { useState, useContext } from "react";
import { Login } from "./Login";
import {
  authFb,
  dataBase,
} from "../../../firebaseConfig"; /* trae el initialiaze con la config de firebase y el getAuth */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { LoginContext } from "../../../context/LoginContext";
import { useFormik } from "formik";
import * as Yup from "yup";

export const LoginContainer = () => {
  //traigo contexto del login pa saber si está logged alguien o no, junto a la fn logout.
  const { isLogged, logout } = useContext(LoginContext);

  /*Variable conectada a la función toggleLoginType*/
  const [loginOrSignin, setLoginOrSignin] = useState(false);

  /* función que cambia un booleano para que el botón cambie por iniciar sesión o registrarse */
  const toggleLoginType = (event) => {
    event.preventDefault();
    setLoginOrSignin(!loginOrSignin);
  };

  /* Voy a agregar Formik y Yup para hacer el formulario de registro.  */

  const {handleSubmit, handleChange, errors} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data)=>{
      console.log(data)
      /*
      si la variable de estado es true para registrarse entonces uso el método de firebase para crear usuario
      sino, uso el para loggear. 
      */
      if (loginOrSignin) {
        await createUserWithEmailAndPassword(
          authFb,
          data.email,
          data.password
        );
      } else {
        await signInWithEmailAndPassword(
          authFb,
          data.email,
          data.password
        );
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string().email("Debe ser un e-mail válido.").required("Campo requerido."),
      password: Yup.string().required("Campo requerido.").min(6, "Mínimo 6 caracteres.")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "Debe contener una mayúscula, una minúscula y un número.")
    }),
  });
  return (

        <Login
          loginOrSignin={loginOrSignin}
          toggleLoginType={toggleLoginType}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          logout={logout}
          isLogged={isLogged}
        />
  );
};
