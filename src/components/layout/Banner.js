import React from "react";
import PropTypes from "prop-types";

export const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
