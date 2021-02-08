import React from "react";
import { Hero } from "../../components/layout/Hero";
import { Banner } from "../../components/layout/Banner";
import { Services } from "./components/Services";
import { FeaturedRooms } from "./components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="pleasant view" subtitle="delux rooms starting at $4">
          {/* <Link to="/rooms" className="btn-primary">
            our rooms
          </Link> */}
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
