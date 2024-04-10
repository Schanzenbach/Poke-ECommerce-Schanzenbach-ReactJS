import { CardMedia, Grid, Card, CardContent, Typography } from "@mui/material";
import "./ItemDetail.css";
import { CounterContainer } from "../../common/counter/CounterContainer";
import { Carousel } from "../../common/carousel/Carousel";

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
            lg={6}
            sx={{ marginLeft: { md: "25%", lg: "0" } }}
          >
            {/* <CardMedia
              className="detail-img"
              component="img"
              sx={{
                height: { xs: "320", sm: "400", md: "400" },
              }}
              image={item.img[0]}
              alt={item.name} */}
            <Carousel item={item} />
            {/* /> */}
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
