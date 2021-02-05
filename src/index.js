import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { RoomProvider } from "./context/room-context";

render(
  <Router>
    <RoomProvider>
      <App />
    </RoomProvider>
  </Router>,
  document.getElementById("root")
);
