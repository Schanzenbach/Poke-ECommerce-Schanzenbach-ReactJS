import { Grid } from "@mui/material";
import { Cart } from "../../common/cart/Cart";
import logo from "./assets/pokeball-logo.svg";
import "./Navbar.css";
import "animate.css";
import { Link } from "react-router-dom";
import { FilterInputContainer } from "../../common/filterinput/FilterInputContainer";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Grid className="navbar-top-half" container>
        <Grid className="navbar-boxes" item xs={3} sm={3} md={3} lg={3}>
          <Link to="/">
            <img
              className="logo animate__animated animate__fadeInTopLeft animate__slow"
              src={logo}
              alt="Logo Pokeball"
            />
          </Link>
        </Grid>

        <Grid className="navbar-boxes" item xs={3} sm={3} md={3} lg={3}>
          <FilterInputContainer />
        </Grid>

        <Grid className="navbar-boxes" item xs={3} sm={3} md={3} lg={3}>
          <Cart />
        </Grid>

        <Grid className="navbar-boxes" item xs={3} sm={3} md={3} lg={3}>
          INICIAR SEIÓN/REGISTRARSE
        </Grid>
      </Grid>
      <Grid className="navbar-bottom-half" container>
        <Grid className="navbar-boxes" item xs={4} sm={4} md={4} lg={4}>
          <Link to="/category/plushies">PLUSHIES</Link>
        </Grid>

        <Grid className="navbar-boxes" item xs={4} sm={4} md={4} lg={4}>
          <Link to="/category/clothes">ROPA</Link>
        </Grid>
        <Grid className="navbar-boxes" item xs={4} sm={4} md={4} lg={4}>
          <Link to="/category/home">HOGAR</Link>
        </Grid>
      </Grid>
    </nav>
  );
};
