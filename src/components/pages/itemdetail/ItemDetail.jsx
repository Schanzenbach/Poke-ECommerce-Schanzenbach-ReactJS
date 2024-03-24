import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ItemDetail.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CounterContainer } from "../../common/counter/CounterContainer";

export const ItemDetail = ({ item, addToCart, initialValue }) => {
  return (
    <div className="body-container">
      <Card className={"item-detail-container"}>
        <CardMedia
          sx={{ borderRadius: "1rem" }}
          component="img"
          height="450"
          image={item.img}
          alt={item.name}
        />
        <CardContent>
          <Typography variant="h3">{item.name}</Typography>
          <Typography variant="h5">${item.price}</Typography>
        </CardContent>
        <CardActions>
          <CounterContainer
            addToCart={addToCart}
            stock={item.stock}
            initialValue={initialValue}
          />
          {/* de acá le paso a la lógica del contador la función que se va a disparar y el stock del item
          para chequear si tengo cuando agrego al carrito */}
        </CardActions>
      </Card>
    </div>
  );
};
