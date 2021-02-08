import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useRoomData } from "context/room-context";

import { RoomHero } from "pages/single-room/components/RoomHero";
import RoomImages from "pages/single-room/components/RoomImages";
import RoomDetails from "pages/single-room/components/RoomDetails";

const SingleRoom = (props) => {
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

  const { name, images } = room;

  const [mainImg, ...roomImages] = images;

  return (
    <>
      <RoomHero mainImg={mainImg} name={name} />

      <section className="single-room">
        <RoomImages images={roomImages} name={name} />
        <RoomDetails room={room} />
      </section>
    </>
  );
};

export default SingleRoom;
