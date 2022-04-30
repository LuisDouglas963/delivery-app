export const editModalisOpen = (state) => state.modals.editModalisOpen || false;
export const addModalisOpen = (state) => state.modals.addModalisOpen || false;
export const delivery = (state) => state.delivery || [];
// export const getDeliveryByID = (id) => (state) =>
//   state.delivery.find((item) => String(item.id) === String(id));

export const getDeliveryByID = (id) => (state) =>
  state.delivery.find((item) => {
    return item.id === id;
  });

export const getDeliveryBeenEdited = (state) => {
  return state.delivery.find((item) => item.id === state.deliveryBeenEdited);
};
