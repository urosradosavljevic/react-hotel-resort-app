import { createClient } from "contentful";

import { getRooms } from "api/room";

export const client = createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

export { getRooms };
