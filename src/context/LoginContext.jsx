import { createContext, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { authFb } from "../firebaseConfig";

export const LoginContext = createContext();
//En este componente, mediante métodos de firebase/auth vamos a chequear si hay un usuario loggeado y vamos a traer su informacion.
export const LoginContextProvider = ({ children }) => {
  /* variable que me va a dar un objeto, si este objeto existe, o sea el usuario está loggeado, entonces me devuelve
las páginas visibles sólo para usuarios, sino, no.  */
  const [isLogged, setIsLogged] = useState(null);

  /*Variables para sacar el email de la persona loggeada */
  const [loggedEmail, setLoggedEmail] = useState();

  /* función que mediante un método de firebase me dice si el usuario está logged or nah, se le pasan 2 arg, getAuth(app); 
  que lo tengo importado como authFb, y un callback al que le voy a pasar como parámetro el usuario cuyo estado quiero chekear*/
  onAuthStateChanged(authFb, (firebaseUser) => {
    if (firebaseUser) {
      setIsLogged(firebaseUser);
      setLoggedEmail(firebaseUser.email);
    } else {
      setIsLogged(null);
    }
  });
  //fn para desloggear la sesión actual
  const logout = (event) => {
    event.preventDefault();
    signOut(authFb);
  };

  const data = { isLogged, loggedEmail, logout };
  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};
