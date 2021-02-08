import React from "react";
import PropTypes from "prop-types";

export const Hero = ({ children, hero = "defaultHero" }) => {
  return (
    <header className={hero}>
      <div className="overlay"></div>
      {children}
    </header>
  );
};

Hero.propTypes = {
  hero: PropTypes.string,
};
