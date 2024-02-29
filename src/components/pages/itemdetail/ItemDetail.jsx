import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div>
      <Card>
        <CardMedia
          className={"card-img"}
          sx={{ borderRadius: "1rem" }}
          component="img"
          height="600"
          image={item.img}
          alt={item.name}
        />
        <CardContent>
          <Typography>{item.name}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
