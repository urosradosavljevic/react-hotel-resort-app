import React, { useState } from "react";
import { useRoomData } from "../context/room-context";
import defaultRoomImg from "../img/room-1.jpeg";
import { Link } from "react-router-dom";
import { StyledHero } from "../components/StyledHero";
import { Banner } from "../components/Banner";

export const SingleRoom = props => {
  const [slug] = useState(props.match.params.slug);

  const { getRoom } = useRoomData();
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="erorr-wrapper">
        <h2>No such room could be found...</h2>
        <Link className="default-anchor-dark" to={`/rooms/`}>
          <span>Go to Rooms Page</span>
        </Link>
      </div>
    );
  }
  
  const {
    name,
    price,
    size,
    capacity,
    pets,
    breakfast,
    description,
    extras,
    images
  } = room;
  const [mainImg, ...roomImages] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultRoomImg}>
        <div className="overlay"></div>
        <Banner title={name}>
          <Link className="default-anchor" to="/rooms/">
            <span>Go to Rooms Page</span>
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {roomImages.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="room-information">
          <div className="room-description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
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
          
          <ul>
            {extras.map((extra, index) => (
              <li key={index}>- {extra}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
