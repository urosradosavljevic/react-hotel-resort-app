import React from "react";
import PropTypes from "prop-types";
import RoomInfo from "./RoomInfo";

const RoomDetails = ({ room }) => {
  const { description, price, size, capacity, pets, breakfast, extras } = room;

  return (
    <div className="room-information">
      <div className="room-description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>

      <RoomInfo
        price={price}
        size={size}
        capacity={capacity}
        pets={pets}
        breakfast={breakfast}
      />

      <ul>
        {extras.map((extra, index) => (
          <li key={index}>- {extra}</li>
        ))}
      </ul>
    </div>
  );
};

RoomDetails.propTypes = {
  room: PropTypes.shape({
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    pets: PropTypes.bool.isRequired,
    breakfast: PropTypes.bool.isRequired,
  }),
};

export default RoomDetails;
