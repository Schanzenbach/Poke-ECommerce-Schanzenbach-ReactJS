import { CardMedia, Grid, Card, CardContent, Typography } from "@mui/material";
import "./ItemDetail.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CounterContainer } from "../../common/counter/CounterContainer";

export const ItemDetail = ({ item, addToCart, initialValue }) => {
  return (
    // <Grid className="body-container" container>
    //   <Grid item className="img-container" xs={12} sm={6} md={6} lg={4}>
    //     <CardMedia
    //       sx={{ borderRadius: "1rem" }}
    //       component="img"
    //       height="400"
    //       image={item.img}
    //       alt={item.name}
    //     />
    //   </Grid>
    //   <Grid item className="details-container" xs={12} sm={6} md={6} lg={8}>
    //     <h1>{item.name}</h1>
    //     <h3>${item.price}</h3>
    //     <h4>STOCK: {item.stock}</h4>
    //     <div className="counter-container">
    //       <CounterContainer
    //         className="item-counter"
    //         addToCart={addToCart}
    //         stock={item.stock}
    //         initialValue={initialValue}
    //       />
    //     </div>
    //   </Grid>

    //   {/* de acá le paso a la lógica del contador la función que se va a disparar y el stock del item
    //       para chequear si tengo cuando agrego al carrito */}
    // </Grid>

    <Grid className="body-container" container>
      <Grid item xs={12}>
        <Card
          className="card"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: { lg: "center" },
          }}
        >
          <Grid xs={12} sm={12} md={6} lg={6}>
            <CardMedia
              className="detail-img"
              component="img"
              sx={{ height: { xs: "320", sm: "400", md: "400" } }}
              image={item.img}
              alt={item.name}
            />
          </Grid>
          <CardContent className="card-detail">
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="h4" color="text.secondary">
              ${item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              STOCK: {item.stock}
            </Typography>
            <CounterContainer
              addToCart={addToCart}
              stock={item.stock}
              initialValue={initialValue}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
