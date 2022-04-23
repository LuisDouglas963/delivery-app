import Box from "@mui/material/Box";
import { DeliveryListItem } from "./DeliveryListItem";

export const DeliveryList = ({ item = [] }) => {
  return (
    <Box component="div">
      <DeliveryListItem />
    </Box>
  );
};
