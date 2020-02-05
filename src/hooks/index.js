import { useState, useEffect } from "react";
import { client } from "../contentful";

export const useRooms = () => {
  const [rooms, setRooms] = useState([]);

  const formatData = items => {
      
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
            content_type: "hotelResortRoom",
            order: 'sys.createdAt'
        });
        const formated = formatData(response.items)
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
