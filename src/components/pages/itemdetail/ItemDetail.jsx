import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ItemDetail = ({ item }) => {
  console.log(item.img);
  return (
    <div>
      <Card>
        <CardMedia
          sx={{ borderRadius: "1rem" }}
          component="img"
          height="400"
          image={item.img}
          alt={item.name}
        />
        <CardContent>
          <Typography variant="h3">{item.name}</Typography>
          <Typography variant="h5">${item.price}</Typography>
        </CardContent>
        <CardActions>
          <button>-</button>
          <p>cantidad</p>
          <button>+</button>
        </CardActions>
      </Card>
    </div>
  );
};
