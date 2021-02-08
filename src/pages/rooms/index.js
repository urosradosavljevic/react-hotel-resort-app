import React from "react";
import { Hero } from "components/layout/Hero";
import { RoomsContainer } from "pages/rooms/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomHero" />
      <RoomsContainer />
    </>
  );
};

export default Rooms;
