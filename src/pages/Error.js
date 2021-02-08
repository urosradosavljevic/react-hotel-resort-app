import React from "react";
import { Hero } from "../components/layout/Hero";
import { Banner } from "../components/layout/Banner";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <Hero>
        <Banner title="404" subtitle="page not found">
          <Link className="default-anchor" to="/">
            <span>Back to Home Page</span>
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};
