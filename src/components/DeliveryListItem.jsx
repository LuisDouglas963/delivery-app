import { useState } from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../redux/actions";
import { editModalisOpen } from "../redux/selectors";

export const DeliveryListItem = ({
  product,
  description,
  delivered,
  deliveryDate,

}) => {

  const dispatch = useDispatch();
  const isOpen = useSelector(editModalisOpen);

  const openModal = () => dispatch({ type: actions.OPEN_EDIT_MODAL });

  const closeModal = () => dispatch({ type: actions.CLOSE_EDIT_MODAL });


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
            <Box>
              <Box>Previsão de entrega: {deliveryDate}</Box>
              <Box>{description}</Box>
            </Box>
          }
        />
      </ListItem>
    </List>
  );
};
