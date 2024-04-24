import { Button } from "@mui/material";
import "./SessionHistory.css";
import { ProductCard } from "../../common/productcard/ProductCard";
import { MdOutlineMenuOpen } from "react-icons/md";

export const SessionHistory = ({ userOrders, isExpanded, toggleExpanded }) => {
  return (
    <div>
      {userOrders.map((order) => {
        return (
          <div key={order.id}>
            <Button
              className="order-btn"
              onClick={() => toggleExpanded(order.id)}
            >
              {order.id} <MdOutlineMenuOpen size="1.5rem" />
              {console.log(isExpanded)}
            </Button>
            <div>Total: ${order.total}</div>
            {isExpanded === order.id && (

            <div className="expanded-items">
              {order.items.map((i) => {
                return (
                  <ProductCard
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    price={i.price}
                    img={i.img[0]}
                  />
                );
              })}
            </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
