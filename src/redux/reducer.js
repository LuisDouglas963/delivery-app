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
    case actions.OPEN_EDIT_MODAL: {
      return {
        ...state,
        modals: {
          ...state.modals,
          editModalisOpen: true,
        },
      };
    }

    case actions.CLOSE_EDIT_MODAL: {
      return {
        ...state,
        modals: {
          ...state.modals,
          editModalisOpen: false,
        },
      };
    }

    case actions.OPEN_ADD_MODAL: {
      return {
        ...state,
        modals: {
          ...state.modals,
          addModalisOpen: true,
        },
      };
    }

    case actions.CLOSE_ADD_MODAL: {
      return {
        ...state,
        modals: {
          ...state.modals,
          addModalisOpen: false,
        },
      };
    }

    default:
      return state;
  }
};
