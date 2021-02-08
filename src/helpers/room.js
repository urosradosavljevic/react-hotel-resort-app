export const formatRooms = (rooms) =>
  rooms.map((room) => {
    const id = room.sys.id;
    const images = room.fields.images.map((image) => image.fields.file.url);
    return {
      id,
      ...room.fields,
      images,
    };
  });
