import React, { useContext, useEffect, createContext, useState } from "react";
import items from "../data/data";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  console.log("context made");
  const [rooms, setRooms] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [featuredRooms, setFeaturedRooms] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [sortedRooms, setSortedRooms] = useState([...rooms]);
  const [loading, setLoading] = useState(true);
  const [roomType, setRoomType] = useState("all");
  const [guests, setGuests] = useState(1);
  // // eslint-disable-next-line no-unused-vars
  // const [maxPrice, setMaxPrice] = useState(1000);
  // // eslint-disable-next-line no-unused-vars
  // const [minSize, setMinSize] = useState(0);
  // // eslint-disable-next-line no-unused-vars
  // const [maxSize, setMaxSize] = useState(1000);
  // // eslint-disable-next-line no-unused-vars
  // const [breakfastFlag, setBreakfastFlag] = useState(false);
  // // eslint-disable-next-line no-unused-vars
  // const [petsFlag, setPetsFlag] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterRooms = () => {
    console.log("not filtered", rooms);
    switch (name) {
      case ''
    }
    const filtered = rooms.filter(room => roomType === room.type);
    setSortedRooms(filtered);
  };

  const handleFilterChange = event => {
    const name = event.target.name;
    // eslint-disable-next-line no-undef
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    console.log(name, name === "type", event.target.value);
    console.log(roomType);
    setRoomType(value);
    switch (name) {
      // case "type":
      //   setRoomType(value);
      //   console.log("room type", roomType, "seting:", setRoomType(value));
      //   filterRooms();
      //   break;
      // case 'guests':
      //   setGuests(parseFloat(value));
      //   console.log('guests from input set:',value)
      //   filterRooms();
      //   console.log('guests after filtering:',value)
      //   break;
      // case 'price':
      //   setMaxPrice(value);
      //   filterRooms();
      //   break;
      // case 'size':
      //   setMaxSize(value);
      //   filterRooms();
      //   break;
      // case 'breakfast':
      //   setBreakfastFlag(value);
      //   filterRooms();
      //   break;
      // case 'pets':
      //   setPetsFlag(value);
      //   filterRooms();
      // break;
      default:
        console.log("Switch defai;t");
    }
  };

  const formatData = items => {
    // getData
    // setLoading(true)
    const tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      const room = {
        id,
        ...item.fields,
        images
      };
      return room;
    });
    return tempItems;
  };

  const getRoom = slug => {
    const tempRooms = [...rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  useEffect(() => {
    const formatedRooms = formatData(items);
    // eslint-disable-next-line no-unused-vars
    const featured = formatedRooms.filter(room => room.featured);
    console.log("useEffect run");

    if (JSON.stringify(rooms) !== JSON.stringify(formatedRooms)) {
      setRooms(formatedRooms);
      // setFeaturedRooms(featured);
      setLoading(false);
      console.log("ulazio");
    }
  }, [featuredRooms, rooms, loading, sortedRooms]);

  useEffect(() => {
    let tempRooms = setSortedRooms(rooms);
    if (roomType !== "all") {
      filterRooms();
    }
  }, [filterRooms, roomType, rooms, sortedRooms]);

  useEffect(() => {
    if (roomType === "all") {
      setSortedRooms(rooms);
    } else if(!sortedRooms.every(room => room.type === roomType)) {
      filterRooms();
    }
  }, [filterRooms, roomType, rooms, sortedRooms]);

  return (
    <RoomContext.Provider
      value={{
        handleFilterChange,
        rooms,
        guests,
        // maxPrice,
        // minSize,
        // maxSize,
        // breakfastFlag,
        // petsFlag,
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
