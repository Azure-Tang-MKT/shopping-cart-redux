import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createStore } from "redux";
import counterReducer from "./reducers";

const store = createStore(counterReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
gi;
