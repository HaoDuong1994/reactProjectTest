import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import RouterCustomer from "./router.jsx";
import App from "./App.jsx";
import "./All.css";
import { GlobalContext } from "./utils/Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <BrowserRouter>
      <RouterCustomer></RouterCustomer>
    </BrowserRouter>
  </GlobalContext>
);
