import { Grid } from "@mui/material";
import { Cart } from "../../common/cart/Cart";
import logo from "./assets/pokeball-logo.svg";
import "./Navbar.css";
import "animate.css";
import { Link } from "react-router-dom";
import { FilterInputContainer } from "../../common/filterinput/FilterInputContainer";
import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";

export const Navbar = () => {
  const {isLogged} = useContext(LoginContext);
  
  let username;

  if (isLogged){
    let indexOfAt = isLogged.email.indexOf('@');
    username = isLogged.email.substring(0, indexOfAt);
  }


  return (
    <Grid container className="navbar">
      <Grid className="navbar-top-half" container>
        <Grid className="navbar-boxes" item xs={6} sm={3} md={3} lg={3}>
          <Link to="/">
            <img
              id="logo"
              className="logo animate__animated animate__fadeInTopLeft animate__slow"
              src={logo}
              alt="Logo Pokeball"
            />
          </Link>
        </Grid>

        <Grid className="navbar-boxes" item xs={6} sm={3} md={3} lg={3}>
          <FilterInputContainer />
        </Grid>

        <Grid className="navbar-boxes" item xs={6} sm={3} md={3} lg={3}>
          <Cart />
        </Grid>

        <Grid className="navbar-boxes" item xs={6} sm={3} md={3} lg={3}>
        <Link to="/login">{isLogged ? username : "LOGIN"}</Link>
        </Grid>
      </Grid>
      <Grid className="navbar-bottom-half" container>
        <Grid className="navbar-boxes" item xs={4} sm={4} md={4} lg={4}>
          <Link to="/category/plushies">PLUSHIES</Link>
          <Link to="/category/plushies">
            <img src="/plush.svg" alt="" className="bar-icons" />
          </Link>
        </Grid>

        <Grid className="navbar-boxes" item xs={4} sm={4} md={4} lg={4}>
          <Link to="/category/clothes">ROPA</Link>
          <Link to="/category/clothes">
            <img src="/clothes.svg" alt="" className="bar-icons" />
          </Link>
        </Grid>
        <Grid className="navbar-boxes" item xs={4} sm={4} md={4} lg={4}>
          <Link to="/category/home">HOGAR</Link>
          <Link to="/category/home">
            <img src="/home.svg" alt="" className="bar-icons" />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
