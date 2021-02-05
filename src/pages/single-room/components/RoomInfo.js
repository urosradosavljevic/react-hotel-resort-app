import React from "react";
import PropTypes from "prop-types";

const RoomInfo = ({ price, size, capacity, pets, breakfast }) => {
  return (
    <div className="room-features">
      <h3>Info</h3>
      <h6>
        <b>Price:</b> ${price}
      </h6>
      <h6>
        <b>Size:</b> {size}
      </h6>
      <h6>
        <b>Capacity:</b>
        {capacity === 1
          ? ` ${capacity} person allowed`
          : ` ${capacity} people allowed`}
      </h6>
      {pets ? (
        <h6>
          <b>Pets </b> allowed
        </h6>
      ) : (
        <h6>
          <b>Pets </b> aren't allowed
        </h6>
      )}
      {breakfast ? (
        <h6>
          <b>Free breakfast</b> included
        </h6>
      ) : (
        <h6>
          <b>Free breakfast</b> not included
        </h6>
      )}
    </div>
  );
};

RoomInfo.propTypes = {
  price: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
  pets: PropTypes.bool.isRequired,
  breakfast: PropTypes.bool.isRequired,
};

export default RoomInfo;
