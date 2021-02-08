import React, { useContext, useEffect, createContext, useState } from "react";

import { useRooms } from "hooks";

export const RoomFilterContext = createContext({});

export const RoomFilterProvider = ({ children }) => {
  const { rooms } = useRooms();
  const [sortedRooms, setSortedRooms] = useState([...rooms]);
  const [roomType, setRoomType] = useState("all");
  const [guests, setGuests] = useState(1);
  const [maxPrice, setMaxPrice] = useState(600);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(93);
  const [breakfastFlag, setBreakfastFlag] = useState(false);
  const [petsFlag, setPetsFlag] = useState(false);

  useEffect(() => {
    let tempRooms = rooms.slice();

    if (roomType !== "all") {
      tempRooms = tempRooms.filter((room) => roomType === room.type);
    }
    if (guests !== 1) {
      tempRooms = tempRooms.filter((room) => guests <= room.capacity);
    }
    if (maxPrice !== 600) {
      tempRooms = tempRooms.filter((room) => maxPrice >= room.price);
    }
    if (maxSize !== 93) {
      tempRooms = tempRooms.filter(
        (room) => maxSize >= room.size && minSize <= room.size
      );
    }
    if (petsFlag) {
      tempRooms = tempRooms.filter((room) => room.pets);
    }
    if (breakfastFlag) {
      tempRooms = tempRooms.filter((room) => room.breakfast);
    }
    // check if filter changed something
    if (JSON.stringify(tempRooms) !== JSON.stringify(sortedRooms)) {
      setSortedRooms(tempRooms);
    }
  }, [
    rooms,
    guests,
    roomType,
    sortedRooms,
    maxPrice,
    maxSize,
    minSize,
    petsFlag,
    breakfastFlag,
  ]);

  return (
    <RoomFilterContext.Provider
      value={{
        guests,
        setGuests,
        setRoomType,
        maxPrice,
        setMaxPrice,
        minSize,
        setMinSize,
        maxSize,
        setMaxSize,
        breakfastFlag,
        setBreakfastFlag,
        petsFlag,
        setPetsFlag,
        sortedRooms,
      }}
    >
      {children}
    </RoomFilterContext.Provider>
  );
};

export const useRoomFilter = () => useContext(RoomFilterContext);
