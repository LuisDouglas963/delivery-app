import { useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

import * as actions from "../redux/actions";
import { editModalisOpen, getDeliveryBeenEdited } from "../redux/selectors";

import useForm from "../hooks/useForm";

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

export const ModalEditItem = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(editModalisOpen);

  const openModal = () => dispatch({ type: actions.OPEN_EDIT_MODAL });

  const closeModal = () => dispatch({ type: actions.CLOSE_EDIT_MODAL });

  const delivery = useSelector(getDeliveryBeenEdited);


  const initialValues = useMemo(() => {
    if (!delivery) {
      return {};
    }
    return {
      product: delivery.product,
      description: delivery.description,
      deliveryDate: delivery.deliveryDate,
    };
  }, [delivery]);

  const onSubmit = ({ values }) => {
    dispatch({ type: actions.SAVE_DELIVERY, payload: values });
  };

  const { handleChange, handleSubmit, values } = useForm(
    initialValues,
    onSubmit
  );

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Editar Produto
          </Typography>
          <Box
            component="div"
            sx={{ margin: "10px 15px", padding: "15px 1px" }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                sx={{ margin: "10px 0" }}
                autoFocus
                margin="dense"
                id="product"
                label="Produto"
                value={values.product}
                name="product"
                fullWidth
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                name="description"
                value={values.description}
                label="Descrição"
                fullWidth
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                autoFocus
                margin="dense"
                id="deliveyDate"
                name="deliveryDate"
                value={values.deliveryDate}
                label="Data de entrega"
                fullWidth
                variant="outlined"
                onChange={handleChange}
              />
              <Box component="div" sx={{ display: "flex", margin: "10px 0" }}>
                <Button onClick={closeModal}>Cancelar</Button>
                <Button type="submit">Salvar</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
