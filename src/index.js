import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import RootContextProvider from "./context/root-provider";

render(
  <Router>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </Router>,
  document.getElementById("root")
);
