import React from "react";
import {useRoomData} from '../context/room-context'
import { RoomsFilter } from "./RoomsFilter";
import { RoomsList } from "./RoomsList";
import { Loading } from "./Loading";
// eslint-disable-next-line no-unused-vars
// import { useRoomsFilterValue } from "../context";

export const RoomsContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const {loading, sortedRooms, rooms} = useRoomData()
  // eslint-disable-next-line no-unused-vars
  // const {handleFilterChange} = useRoomsFilterValue()
  // handleFilterChange()
  // eslint-disable-next-line no-undef
  // console.log(loading, rooms)
  console.log('cantainer rendered',sortedRooms)
  console.log('cantainer rendered, rooms:',rooms) 
  if(loading){
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms || [] } />
    </div>
  );
};
