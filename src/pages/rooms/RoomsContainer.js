// eslint-disable-next-line no-unused-vars
import React from "react";

import { RoomsFilter } from "./components/RoomsFilter";
import { RoomsList } from "./components/RoomsList";
import { Loading } from "../../components/Loading";

import { useRoomData } from "../../context/room-context";
import { useRoomFilter } from "../../context/room-filter-context";

export const RoomsContainer = () => {
  const { loading, rooms } = useRoomData();
  const { sortedRooms } = useRoomFilter();

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms || []} />
    </div>
  );
};
