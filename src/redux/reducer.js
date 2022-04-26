import * as actions from "./actions";

const initialState = {
  delivery: [],
  modals: {
    editModalisOpen: false,
    addModalisOpen: false,
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_DELIVERY: {
      return {
        ...state,
        delivery: [...state.delivery, action.payload],
      };
    }

    case actions.OPEN_EDIT_MODAL: {
      return {
        ...state,
        modals: {
          ...state.modals,
          editModalisOpen: true,
        },
      };
    }

    default:
      return state;
  }
};
