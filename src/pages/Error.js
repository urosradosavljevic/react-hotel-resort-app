import React from "react";
import { Link } from "react-router-dom";

import { Hero } from "components/layout/Hero";
import { Banner } from "components/layout/Banner";

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
