import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { IoBagCheckOutline } from "react-icons/io5";
import "../../palette/palette.css";
import "./CartView.css";
import {
  Card,
  Typography,
  CardContent,
  Button,
  CardMedia,
  Grid,
} from "@mui/material";
import { LoginContext } from "../../../context/LoginContext";

export const CartView = () => {
  const { cart, clearCart, removeById, totalCartPrice } =
    useContext(CartContext);
  const total = totalCartPrice().toFixed(2);

  const { isLogged } = useContext(LoginContext);

  return (
    <Grid
      container
      className="cart-body-container"
      sx={{ flexDirection: { xs: "column", lg: "row" } }}
    >
      <Grid item xs={12} lg={6}>
        {cart.map((p) => (
          <Card
            item
            className="cart-p-card"
            key={p.id}
            sx={{
              margin: {
                xs: "0 5% 5% 5%",
                sm: "0 5% 5% 5%",
                lg: "0 1% 1% 1%",
              },
              width: { xs: "90%", sm: "90%", lg: "100%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row", lg: "row" },
              minHeight: { sm: " 25vh", lg: "27.5vh" },
            }}
          >
            <Link
              to={`/item/${p.id}`}
              className="img-link"
              sx={{
                borderRadius: "1rem",
                width: { sm: "30%", md: "30%", lg: "30%" },
              }}
            >
              <CardMedia
                sx={{
                  borderRadius: "1rem",
                  width: { sm: "100%" },
                }}
                component="img"
                image={p.img[0]}
                alt={p.name}
              />
            </Link>
            <CardContent
              sx={{
                display: { sm: "flex" },
                flexDirection: { sm: "column" },
                justifyContent: { sm: "center" },
                minWidth: { sm: "70%", md: "75%", lg: "70%" },
              }}
            >
              <Typography
                variant="h4"
                sx={{ height: { sm: "25%" } }}
                noWrap={true}
              >
                {p.name}
              </Typography>
              <Typography variant="h5" sx={{ height: { sm: "25%" } }}>
                Cantidad: {p.quantity}
              </Typography>
              <Typography variant="h5" sx={{ height: { sm: "25%" } }}>
                ${p.price * p.quantity}
              </Typography>
              <Button
                sx={{
                  height: { sm: "25%" },
                  width: { xs: "100%", sm: "50px" },
                  fontSize: { xs: "35px", sm: "20px" },
                }}
                variant="text"
                className="remove-btn"
                onClick={() => removeById(p.id)}
              >
                🗑️
              </Button>
            </CardContent>
          </Card>
        ))}
      </Grid>

      {cart.length > 0 ? (
        <Grid
          className="cartview-btn-container"
          container
          xs={12}
          sm={12}
          lg={5}
          sx={{
            height: { lg: "70vh" },
            display: "flex",
            flexDirection: { xs: "column" },
            alignContent: { xs: "center" },
            position: { lg: "fixed" },
            marginLeft: { lg: "55%" },
          }}
        >
          <Typography
            variant="h5"
            alignSelf="center"
            className="cart-total-amount"
          >
            TOTAL: $ {total}
          </Typography>
          <Button
            className="cart-end-btn"
            variant="outlined"
            onClick={clearCart}
            sx={{
              width: { xs: "90%", lg: "50%" },
              height: { xs: "60px" },
              fontSize: { xs: "20px" },
            }}
          >
            Vaciar Carrito 🗑️
          </Button>
          <Button
            className="cart-end-btn"
            variant="outlined"
            sx={{
              width: { xs: "90%", lg: "50%" },
              height: { xs: "60px" },
              fontSize: { xs: "20px" },
            }}
          >
            <Link to={isLogged ? "/checkout" : "/login"} className="checkout-link">
              Finalizar la compra
              <IoBagCheckOutline color="white" />
            </Link>
          </Button>
        </Grid>
      ) : (
        <Grid
          container
          className="cart-not-found"
          xs={12}
          sm={12}
          lg={6}
          sx={{
            minHeight: { xs: "70vh", lg: "70vh" },
            display: "flex",
            flexDirection: { xs: "column" },
            alignItems: { xs: "center", lg: "center" },
            justifyContent: { lg: "center" },
            position: { lg: "fixed" },
            marginLeft: { lg: "0" },
          }}
        >
          <Typography variant="h5">
            Parece que aún no has atrapado nada!
          </Typography>
          <Button variant="outlined" className="cart-end-btn">
            <Link to={"/"}>Ver Productos.</Link>
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
