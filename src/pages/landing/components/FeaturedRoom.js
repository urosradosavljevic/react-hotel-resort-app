import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import defaultImg from "img/room-1.jpeg";

export const FeaturedRoom = ({ featuredRoom }) => {
  const { name, description, slug, images } = featuredRoom;

  return (
    <section className="featured-room">
      <img
        className="room-featured-image"
        src={images[0] || defaultImg}
        alt={`Room ${name}`}
      />
      <article>
        <h4>{name}</h4>
        <p>{description.substring(0, 180)}</p>
        <Link className="default-anchor-dark" to={`/rooms/${slug}`}>
          <span>Look up</span>
        </Link>
      </article>
    </section>
  );
};
// #efeae6
FeaturedRoom.propTypes = {
  featuredRoom: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};
