import "./Checkout.css";
import { Grid, Button, Box, Typography } from "@mui/material";
import { FaRegCopy } from "react-icons/fa";

export const Checkout = ({ submitForm, captureUser, orderId, copy }) => {
  return (
    <>
      {orderId ? (
        <Grid container className="checkout-body-cont">
          <Grid
            item
            className="form-box"
            sx={{
              display: { xs: "flex" },
              flexDirection: { xs: "column" },
              alignItems: { xs: "center", md: "start" },
              width: { xs: "100%", md: "50%" },
              height: "70%",
              padding: "5px",
            }}
          >
            <Typography variant="h5">
              ¡Gracias por tu compra! tu código de seguimiento es:
              <br />
              {orderId}
            </Typography>
            <Button className="end-buy-btn" onClick={copy}>
              <FaRegCopy size={"2rem"} />
            </Button>
            <Typography variant="h6">No te olvides guardarlo!</Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          className="checkout-body-cont"
          sx={{
            display: { xs: "flex" },
            flexDirection: { xs: "column" },
          }}
        >
          <Grid item>
            <Box
              className="form-box"
              component="form"
              onSubmit={submitForm}
              sx={{
                display: { xs: "flex" },
                flexDirection: { xs: "column" },
                alignItems: { xs: "center", md: "start" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <input
                type="text"
                placeholder="Nombre Completo"
                name="name"
                onChange={captureUser}
              />
              <input
                type="int"
                placeholder="Número de tarjeta"
                name="cardNumber"
                onChange={captureUser}
              />
              <input
                type="int"
                placeholder="Teléfono"
                name="phone"
                onChange={captureUser}
              />
              <Button
                className="end-buy-btn"
                type="submit"
                sx={{
                  alignSelf: { xs: "center", md: "end" },
                  width: { xs: "40%", md: "25%" },
                }}
              >
                COMPRAR
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};
