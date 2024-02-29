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
import { Link } from "react-router-dom";

export const ProductCard = ({ name, price, img, id }) => {
  return (
    <Card raised={true} className={"contenedor-de-carta"}>
      <Link to={`item/${id}`}>
        <CardMedia
          className={"card-img"}
          sx={{ borderRadius: "1rem" }}
          component="img"
          height="200"
          image={img}
          alt={name}
        />
      </Link>
      <CardContent>
        <Typography variant="h6" align="center">
          {name}
        </Typography>
        <Typography component={"span"}>${price}</Typography>
      </CardContent>
      <CardActions className={"btn-container"}>
        <Link to={`item/${id}`} className="link-btn">
          <Button
            fullWidth={true}
            variant="outlined"
            className={"see-detail-btn"}
          >
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
