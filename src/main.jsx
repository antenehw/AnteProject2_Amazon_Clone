import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
<<<<<<< HEAD
import DataProvider from "./Components/DataProvider/DataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
=======
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> 56dbabc0c2672523e0771b2c4b5ecc1b5084f774
);
