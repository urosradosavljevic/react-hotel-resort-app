import { useState, useEffect } from "react";

import { getRooms } from "api";
import { formatRooms } from "helpers/room";

export const useRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRooms();
        const formated = formatRooms(response.items);
        setRooms(formated);
      } catch (error) {
        console.error(error);
      }
    };

    if (Array.isArray(rooms) && rooms.length === 0) {
      fetchData();
    }
  }, [rooms]);

  return { rooms, setRooms };
};
