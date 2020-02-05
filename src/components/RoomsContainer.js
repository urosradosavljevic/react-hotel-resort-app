// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import {useRoomData} from '../context/room-context'
import { RoomsFilter } from "./RoomsFilter";
import { RoomsList } from "./RoomsList";
import { Loading } from "./Loading";

export const RoomsContainer = () => {
  const {loading,sortedRooms, rooms} = useRoomData()
  
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
