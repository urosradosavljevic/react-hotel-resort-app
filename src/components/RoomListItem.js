import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../img/room-1.jpeg";
import PropTypes from "prop-types";
import { getFormatedPrice } from "../helpers";

export const RoomListItem = ({
  name,
  slug,
  featuredImage,
  price,
  type,
  size,
}) => {
  return (
    <article className="room-item">
      <Link to={`/rooms/${slug}`}>
        <img
          className="room-item-image"
          src={featuredImage || defaultImg}
          alt={`Room ${name}`}
        />
      </Link>
      <div className="room-item-body">
        <div className="room-item-header">
          <Link to={`/rooms/${slug}`}>
            <h4 className="room-item-title">{name}</h4>
          </Link>
          <span className="room-item-price">{getFormatedPrice(price)}</span>
        </div>
        <div className="room-item-description">
          <span className="room-item-type">{type} bed</span>
          <span className="room-item-size">
            {size} m<sup>2</sup>
          </span>
        </div>
      </div>
    </article>
  );
};
// #efeae6
RoomListItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
};
