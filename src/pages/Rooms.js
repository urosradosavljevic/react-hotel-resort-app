import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";

export const Rooms = () => {
  return (
    <div>
      <Hero hero="roomHero"/>
      <Services/>
    </div>
  );
};
