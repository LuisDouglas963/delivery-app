import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./sagas";
import { rootReducer } from "./reducer";

const runSagas = (sagaMiddleware) => {
  sagaMiddleware.run(rootSaga);
};

export const createReduxStore = () => {
  const initialState = {
    delivery: [],
    deliveryBeenEdited: '',
    modals: {
      editModalisOpen: false,
      addModalisOpen: false,
    },
  };
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, initialState, enhancer);
  // console.log(rootReducer())

  runSagas(sagaMiddleware);
  return store;
};
