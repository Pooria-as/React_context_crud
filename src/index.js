import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { MyProvider } from "./Context";

ReactDOM.render(
  <BrowserRouter>
   <MyProvider>
     <App/>
   </MyProvider>
  </BrowserRouter>,
  document.querySelector("#app")
);
