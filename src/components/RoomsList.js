import React from "react";
import { RoomListItem } from "./RoomListItem";

export const RoomsList = ({ rooms }) => {
  console.dir(rooms)
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <div className="rooms-list-wrapper">
      {rooms.map(room => (
        <RoomListItem
          key={room.id}
          name={room.name}
          slug={room.slug}
          featuredImage={room.images[0]}
          price={room.price}
          type={room.type}
          size={room.size}
        />
      ))}
    </div>
  );
};
