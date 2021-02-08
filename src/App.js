import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "pages/landing";
import RoomsPage from "pages/rooms";
import { Error } from "pages/Error";
import SingleRoom from "pages/single-room";

import { Header } from "components/layout/Header";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/rooms/" component={RoomsPage} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </main>
    </>
  );
}

export default App;
