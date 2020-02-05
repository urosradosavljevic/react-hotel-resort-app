import React from "react";
import { useRoomData } from "../context/room-context";
import { Loading } from "./Loading";
import { FeaturedRoom } from "./FeaturedRoom";

export const FeaturedRooms = () => {
    
  const {loading,featuredRooms} = useRoomData();

  const featuredRoomsElements = featuredRooms.map(featuredRoom => {
    return <FeaturedRoom key={featuredRoom.id} featuredRoom={featuredRoom} />;
  });

  if(loading){
    return(
      <Loading />
    )
  }

  return (
    <div className="featured-wrapper">
      <h3>Featured Rooms</h3>
      <div className="featured-rooms">
        {featuredRoomsElements}
       </div>
     </div>
  );
};
