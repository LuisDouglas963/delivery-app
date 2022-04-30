import * as actions from "./actions";

const initialState = {
  delivery: [
   
  ],
  modals: {
    editModalisOpen: false,
    addModalisOpen: false,
  },
};

const uuId = () => Math.random().toString(36).substr(3, 9);

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

    case actions.SAVE_DELIVERY: {
      const newDelivery = {
        ...action.payload,
        id: uuId(),
      }
      return {
        ...state,
        delivery: [
          ...state.delivery,
          newDelivery,
        ],
      };
    }

    

    // case actions.SHOW_DELIVERY: {
    //   return {
    //     state,
    //   }
    // }

    default:
      return state;
  }
};
