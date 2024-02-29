import "./ProductCard.css";
import "../../palette/palette.css";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const ProductCard = ({ name, price, img }) => {
  return (
    <Card raised={true} className={"contenedor-de-carta"}>
      <a href="">
        <CardMedia
          className={"card-img"}
          sx={{ borderRadius: "1rem" }}
          component="img"
          height="200"
          image={img}
          alt={name}
        />
      </a>
      <CardContent>
        <Typography variant="h6" align="center">
          {name}
        </Typography>
        <Typography component={"span"}>${price}</Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth={true}
          variant="outlined"
          className={"see-detail-btn"}
        >
          Ver Detalle
        </Button>
      </CardActions>
    </Card>
  );
};
