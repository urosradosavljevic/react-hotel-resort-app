import React from "react";
import { RoomDataProvider } from "./room-context";
import { RoomFilterProvider } from "./room-filter-context";

export const RootContextProvider = ({ children }) => {
  return (
    <RoomFilterProvider>
      <RoomDataProvider>{children}</RoomDataProvider>
    </RoomFilterProvider>
  );
};

export default RootContextProvider;
