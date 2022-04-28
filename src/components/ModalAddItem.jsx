// import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

import * as actions from "../redux/actions";
import { addModalisOpen } from "../redux/selectors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  transform: "translate(-50%, -50%)",

  width: "22rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const ModalAddItem = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(addModalisOpen);

  const openModal = () => dispatch({ type: actions.OPEN_ADD_MODAL });

  const closeModal = () => dispatch({ type: actions.CLOSE_ADD_MODAL });

  return (
    <div>
      <Button onClick={openModal}>Adicionar delivery</Button>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Produto
          </Typography>
          <Box
            component="div"
            sx={{ margin: "10px 15px", padding: "15px 1px" }}
          >
            <TextField
              sx={{ margin: "10px 0" }}
              autoFocus
              margin="dense"
              id="product"
              label="Produto"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Descrição"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="deliveyDate"
              label="Data de entrega"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box component="div" sx={{ display: "flex", margin: "10px 0" }}>
            <Button onClick={closeModal}>Cancelar</Button>
            <Button onClick={closeModal}>Salvar</Button>
          </Box>

          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
};
