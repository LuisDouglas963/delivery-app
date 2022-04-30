import Box from "@mui/material/Box";
import { DeliveryListItem } from "./DeliveryListItem";
import { useDispatch, useSelector } from "react-redux";
import { delivery } from "../redux/selectors";
import { useEffect } from "react";

export const DeliveryList = () => {
  const deliveries = useSelector(delivery);

  return (
    <Box component="div">
      {deliveries.map((delivery) => {
        console.log(delivery);

        return <DeliveryListItem {...delivery} />;
      })}
     
    </Box>
  );
};
