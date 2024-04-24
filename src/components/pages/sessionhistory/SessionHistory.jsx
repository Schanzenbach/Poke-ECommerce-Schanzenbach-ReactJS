import { Button } from "@mui/material";
import "./SessionHistory.css";
import { ProductCard } from "../../common/productcard/ProductCard";

export const SessionHistory = ({userOrders}) => {
  console.log(userOrders);
  
    
  return (
    <div>
      {
        userOrders.map((order)=>{
          return ( <div key={order.id}>
            <Button className="order-btn">{order.id}</Button> 
            {
              order.items.map((i)=>{
                return (
                  <ProductCard
                  key={i.id}
                  id={i.id}
                  name={i.name}
                  price={i.price}
                  img={i.img[0]}
                />
                )
              })
            }
          </div> 
          )
        })
      }

    </div>
  )
}
