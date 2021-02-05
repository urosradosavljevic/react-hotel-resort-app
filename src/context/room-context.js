import React, { useContext, useEffect, createContext, useState } from "react";
import { useRooms } from "../hooks";

export const RoomDataContext = createContext();

export const RoomDataProvider = ({ children }) => {
  const { rooms } = useRooms([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRoom = (slug) => {
    const tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  useEffect(() => {
    setLoading(true);

    const featured = rooms.filter((room) => room.featured);

    if (JSON.stringify(featuredRooms) !== JSON.stringify(featured)) {
      setFeaturedRooms(featured);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rooms]);

  return (
    <RoomDataContext.Provider
      value={{
        rooms,
        getRoom,
        featuredRooms,
        loading,
        setLoading,
      }}
    >
      {children}
    </RoomDataContext.Provider>
  );
};

export const useRoomData = () => useContext(RoomDataContext);
