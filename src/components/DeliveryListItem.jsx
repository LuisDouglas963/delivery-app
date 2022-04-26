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
import { useDispatch } from 'react-redux'

export const DeliveryListItem = ({
  title,
  description,
  delivered,
  deliveryDate,

}) => {

  const dispatch = useDispatch();

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
              <EditIcon  />
            </IconButton>
          </Box>
        }
      >
        <ListItemText
          primary={title}
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
