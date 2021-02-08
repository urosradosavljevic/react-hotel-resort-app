import React from "react";

import { RoomDataProvider } from "context/room-context";
import { RoomFilterProvider } from "context/room-filter-context";

export const RootContextProvider = ({ children }) => {
  return (
    <RoomFilterProvider>
      <RoomDataProvider>{children}</RoomDataProvider>
    </RoomFilterProvider>
  );
};

export default RootContextProvider;
