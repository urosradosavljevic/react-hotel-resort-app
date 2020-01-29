import React from "react";
// eslint-disable-next-line no-unused-vars
import { FaCocktail, FaHiking, FaGuitar, FaLuggageCart } from "react-icons/fa";

export const Services = () => {
  return (
    <div className="services-wrapper">
      <h3>Services</h3>
      <div className="services">
        <article>
          <span>
            <FaCocktail />
          </span>
          <h4>Free Cocktails</h4>
          <p>
            Aenean suscipit suscipit tortor ac porttitor. Phasellus ullamcorper
            massa non ante egestas sagittis. Pellentesque id auctor sem, sed
            convallis ante.
          </p>
        </article>
        <article>
          <span>
            <FaHiking />
          </span>
          <h4>Endless Hiking</h4>
          <p>
            Aenean suscipit suscipit tortor ac porttitor. Phasellus ullamcorper
            massa non ante egestas sagittis. Pellentesque id auctor sem, sed
            convallis ante.
          </p>
        </article>
        <article>
          <span>
            <FaLuggageCart />
          </span>
          <h4>Free transportation from airport</h4>
          <p>
            Aenean suscipit suscipit tortor ac porttitor. Phasellus ullamcorper
            massa non ante egestas sagittis. Pellentesque id auctor sem, sed
            convallis ante.
          </p>
        </article>
        <article>
          <span>
            <FaGuitar />
          </span>
          <h4>Gigs every saturday</h4>
          <p>
            Aenean suscipit suscipit tortor ac porttitor. Phasellus ullamcorper
            massa non ante egestas sagittis. Pellentesque id auctor sem, sed
            convallis ante.
          </p>
        </article>
      </div>
    </div>
  );
};
