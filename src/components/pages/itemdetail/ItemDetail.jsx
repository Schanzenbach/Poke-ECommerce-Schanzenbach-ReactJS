import { CardMedia, Grid, Card, CardContent, Typography } from "@mui/material";
import "./ItemDetail.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CounterContainer } from "../../common/counter/CounterContainer";

export const ItemDetail = ({ item, addToCart, initialValue }) => {
  return (
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
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ marginLeft: { md: "25%", lg: "0" } }}
            lg={6}
          >
            <CardMedia
              className="detail-img"
              component="img"
              sx={{
                height: { xs: "320", sm: "400", md: "400" },
              }}
              image={item.img}
              alt={item.name}
            />
          </Grid>
          <CardContent className="card-detail">
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="h4" className="price-stock">
              ${item.price}
            </Typography>
            <Typography variant="body2" className="price-stock">
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
