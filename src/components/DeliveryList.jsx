import Box from "@mui/material/Box";
import { DeliveryListItem } from "./DeliveryListItem";
import { useDispatch, useSelector } from "react-redux";
import { delivery } from "../redux/selectors";
import { useEffect } from "react";

export const DeliveryList = () => {
  const deliveries = useSelector(delivery);

  return (
    <Box component="div">
      {deliveries.map((delivery) => (
        <DeliveryListItem
          product={delivery.product}
          description={delivery.description}
          deliveryDate={delivery.deliveryDate}
        />
      ))}
      {/* <DeliveryListItem
        product="Burger"
        description="S/ alface"
        delivered={true}
        deliveryDate="09/10/2022"
      />
      <DeliveryListItem
        product="Pizza Calabreza"
        description="S/ Cebola"
        delivered={true}
        deliveryDate="09/10/2022"
      /> */}
    </Box>
  );
};
