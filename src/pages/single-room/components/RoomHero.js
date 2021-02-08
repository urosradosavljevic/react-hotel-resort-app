import React from "react";
import defaultRoomImg from "../../../img/room-1.jpeg";
import PropTypes from "prop-types";
import { StyledHero } from "../../../components/StyledHero";
import { Banner } from "../../../components/layout/Banner";
import { Link } from "react-router-dom";

const RoomHero = (props) => {
  return (
    <StyledHero img={props.mainImg || defaultRoomImg}>
      <div className="overlay"></div>
      <Banner title={props.name}>
        <Link className="default-anchor" to="/rooms/">
          <span>Go to Rooms Page</span>
        </Link>
      </Banner>
    </StyledHero>
  );
};

RoomHero.propTypes = {
  mainImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export { RoomHero };
