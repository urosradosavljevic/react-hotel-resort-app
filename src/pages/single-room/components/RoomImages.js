import React from "react";
import PropTypes from "prop-types";

const RoomImages = ({ images, name }) => {
  return (
    <div className="single-room-images">
      {images.map((src, idx) => {
        return (
          <img key={`room-img-${idx}`} src={src} alt={`Room ${name} ${idx}`} />
        );
      })}
    </div>
  );
};

RoomImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};

export default RoomImages;
