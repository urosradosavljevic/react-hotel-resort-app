export const getRooms = () =>
  client.getEntries({
    content_type: "hotelResortRoom",
    order: "sys.createdAt",
  });

export const formatRooms = (rooms) =>
  rooms.map((room) => {
    const id = room.sys.id;
    const images = room.fields.images.map((image) => image.fields.file.url);
    const room = {
      id,
      ...room.fields,
      images,
    };
    return room;
  });
