/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, createContext, useState } from "react";
import {useRooms} from '../hooks'

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const {rooms} = useRooms([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([...rooms]);
  const [loading, setLoading] = useState(true);
  const [roomType, setRoomType] = useState("all");
  const [guests, setGuests] = useState(1);
  const [maxPrice, setMaxPrice] = useState(600);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(93);
  const [breakfastFlag, setBreakfastFlag] = useState(false);
  const [petsFlag, setPetsFlag] = useState(false);

  const getRoom = slug => {
    const tempRooms = [...rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  useEffect(() => {
    setLoading(true);
    
    const featured = rooms.filter(room => room.featured);
    
    if (JSON.stringify(featuredRooms) !== JSON.stringify(featured)) {
      setFeaturedRooms(featured);
      setLoading(false);
    }
  },[rooms]);
  
  useEffect(() => {
    let tempRooms = rooms;
    if (roomType !== "all") {
      tempRooms = tempRooms.filter(room => roomType === room.type);
    }
    if (guests !== 1) {
      tempRooms = tempRooms.filter(room => guests <= room.capacity);
    }
    if (maxPrice !== 600) {
      tempRooms = tempRooms.filter(room => maxPrice >= room.price);
    }
    if (maxSize !== 93) {
      tempRooms = tempRooms.filter(
        room => maxSize >= room.size && minSize <= room.size
      );
    }
    if (petsFlag) {
      tempRooms = tempRooms.filter(room => room.pets);
    }
    if (breakfastFlag) {
      tempRooms = tempRooms.filter(room => room.breakfast);
    }
    if (JSON.stringify(tempRooms) !== JSON.stringify(sortedRooms)) {
      setSortedRooms(tempRooms);
    }
  }, [
    guests,
    roomType,
    rooms,
    sortedRooms,
    maxPrice,
    maxSize,
    minSize,
    petsFlag,
    breakfastFlag
  ]);

  return (
    <RoomContext.Provider
      value={{
        rooms,
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
        featuredRooms,
        sortedRooms,
        getRoom,
        loading,
        setLoading
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

// exporting usable useContext with Context function (improved version of Room consumer with hooks)
export const useRoomData = () => useContext(RoomContext);

//************************************************************************************************** */
// Old approach for functional components
const RoomConsumer = RoomContext.Consumer;
// High Order Component
export const withRoomConsumer = Component => {
  // return const consumerWrapper = props => {
  return function consumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
};

// High Order Component use case
const RoomContainer = ({ context }) => {
  const { rooms, sortedRooms, loading } = context;
  if (loading) {
    return <p>loading data...</p>;
  }
  return (
    <p>
      loaded data: {rooms} {sortedRooms}
    </p>
  );
};
//exorting function that renders desired component with context consumer in it
export default withRoomConsumer(RoomContainer);
