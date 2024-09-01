import "./index.css";

import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);
reportWebVitals();
