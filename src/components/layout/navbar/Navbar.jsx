import { Grid } from "@mui/material";
import { Cart } from "../../common/cart/Cart";
import logo from "./assets/pokeball-logo.svg";
import "./Navbar.css";
import "animate.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Grid className="navbar-top-half" container>
        <Grid className="navbar-boxes" item xs={3} sm={3} md={3} lg={3}>
          <Link to={"/"}>
            <div className="logo-anchor">
              <img
                className="logo animate__animated animate__fadeInTopLeft animate__slow"
                src={logo}
                alt="Logo Pokeball"
              />
            </div>
          </Link>
        </Grid>

        <Grid className="navbar-boxes" item xs={3} sm={3} md={3} lg={3}>
          <div className="filter-box">
            <input
              className="filter-input"
              type="text"
              placeholder="Ej.:Lapras"
            />
          </div>
        </Grid>

        <Grid className="navbar-boxes" item xs={3} sm={3} md={3} lg={3}>
          <Cart />
        </Grid>

        <Grid className="navbar-boxes" item xs={3} sm={3} md={3} lg={3}>
          INICIAR SEIÓN/REGISTRARSE
        </Grid>
      </Grid>
      <Grid className="navbar-bottom-half" container>
        <Link to={`/plushies`}>
          <Grid className="navbar-boxes" item xs={4} sm={4} md={4} lg={4}>
            PLUSHIES
          </Grid>
        </Link>

        <Grid className="navbar-boxes" item xs={4} sm={4} md={4} lg={4}>
          ROPA
        </Grid>
        <Grid className="navbar-boxes" item xs={4} sm={4} md={4} lg={4}>
          HOGAR
        </Grid>
      </Grid>
    </nav>
  );
};
