import Box from "@mui/material/Box";
import { DeliveryListItem } from "./DeliveryListItem";

export const DeliveryList = ({ item = [] }) => {
  return (
    <Box component="div">
      <DeliveryListItem
        title="Burger"
        description="S/ alface"
        delivered={true}
        deliveryDate="09/10/2022"
      />
      <DeliveryListItem
        title="Pizza Calabreza"
        description="S/ Cebola"
        delivered={true}
        deliveryDate="09/10/2022"
      />
    </Box>
  );
};
