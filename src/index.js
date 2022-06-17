import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./contexts/ContextProvider";

import "./index.css";
import App from "./App";
//This will import all Tailwind CSS styles

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
