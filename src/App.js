import React from "react";
import "./App.scss";

import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { Error } from "./pages/Error";
import SingleRoom from "./pages/single-room";

import { Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </main>
    </>
  );
}

export default App;
