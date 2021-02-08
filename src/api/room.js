import { client } from ".";

export const getRooms = () =>
  client.getEntries({
    content_type: "hotelResortRoom",
    order: "sys.createdAt",
  });
