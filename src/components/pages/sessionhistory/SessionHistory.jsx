import {
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./SessionHistory.css";
import { MdOutlineMenuOpen } from "react-icons/md";

export const SessionHistory = ({ userOrders, isExpanded, toggleExpanded }) => {

  return (
    <>
      {userOrders.map((order) => {
        return (
          <Grid
            item
            key={order.id}
            className="orders-container"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
            }}
          >
            <Button
              className="order-btn"
              onClick={() => toggleExpanded(order.id)}
            >
              {order.date} <MdOutlineMenuOpen size="1.5rem" />
            </Button>
            <Grid className="history-text" sx={{ 
              width: { xs: "90%", sm: "75%" },
              height: {xs: "20vh", sm: "10vh"},
              display: "flex",
              flexDirection: {xs: "column"},
              justifyContent: "center",
              alignItems: "center",
              padding: "2px",
              marginBottom: "5px",
              }}>
            <Typography variant="h6" >
              Total: ${order.total}
            </Typography>
            <Typography variant="h6" >
              Código: {order.id}
            </Typography>
            </Grid>

            {isExpanded === order.id && (
              <Grid
                className="historial-cartas"
                sx={{
                  maxWidth: { xs: "100%" },
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%" },
                  justifyContent: { xs: "center" },
                  alignItems: { xs: "center" },
                }}
              >
                {order.items.map((i) => {
                  return (
                    <Card
                      item
                      className="history-card"
                      key={i.id}
                      sx={{
                        margin: {
                          xs: "0 5% 5% 5%",
                          sm: "0 5% 5% 5%",
                          lg: "0 1% 1% 1%",
                        },
                        width: { xs: "75%" },
                        alignSelf: "center",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row", lg: "row" },
                        minHeight: { xs: "20vh", sm: " 25vh", lg: "27.5vh" },
                      }}
                    >
                      <Link
                        to={`/item/${i.id}`}
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
                          image={i.img[0]}
                          alt={i.name}
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
                          {i.name}
                        </Typography>
                        <Typography variant="h5" sx={{ height: { sm: "25%" } }}>
                          Cantidad: {i.quantity}
                        </Typography>
                        <Typography variant="h5" sx={{ height: { sm: "25%" } }}>
                          ${i.price * i.quantity}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              </Grid>
            )}


          </Grid>
        );
      })}
    </>
  );
};
