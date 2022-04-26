import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { createReduxStore } from "./redux/store";
// import rootReducer from "./reducers";

const store = createReduxStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
