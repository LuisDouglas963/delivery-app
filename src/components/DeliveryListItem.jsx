import { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import { editModalisOpen, getDeliveryByID } from "../redux/selectors";
import useForm from "../hooks/useForm";

export const DeliveryListItem = ({
  id,
  product,
  description,
  delivered,
  deliveryDate,
}) => {
  const dispatch = useDispatch();

  const isOpen = useSelector(editModalisOpen);

  const openModal = () =>
    dispatch({ type: actions.OPEN_EDIT_MODAL, payload: { deliveryId: id } });

  const delivery = useSelector(getDeliveryByID(id));

  const initialValues = useMemo(
    () => ({
      product: delivery.product,
      description: delivery.description,
      deliveryDate: delivery.deliveryDate,
    }),
    [delivery]
  );
  const onSubmit = () => {
    console.log("ok");
  };

  const { handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <List>
      <ListItem
        secondaryAction={
          <Box component="div" sx={{ display: "flex" }}>
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: 10 }}>Entrega Concluida?</Typography>
              <Checkbox
                sx={{ display: "flex", alignItems: "center", size: "small" }}
              />
            </Box>

            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>

            <IconButton edge="end" aria-label="edit">
              <EditIcon onClick={openModal} />
            </IconButton>
          </Box>
        }
      >
        <ListItemText
          primary={product}
          secondary={
            <Box component="form" onSubmit={handleSubmit}>
              <Box>Previsão de entrega: {deliveryDate}</Box>
              <Box>{description}</Box>
            </Box>
          }
        />
      </ListItem>
    </List>
  );
};
