import React from "react";
import { Hero } from "../components/Hero";
import { Banner } from "../components/Banner";
import {Services} from '../components/Services'
import {FeaturedRooms} from '../components/FeaturedRooms'

export const Home = () => {
  return (
    <div>
      <Hero>
        <Banner title="pleasant view" subtitle="delux rooms starting at $4">
          {/* <Link to="/rooms" className="btn-primary">
            our rooms
          </Link> */}
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms/>
    </div> 
  );
};
