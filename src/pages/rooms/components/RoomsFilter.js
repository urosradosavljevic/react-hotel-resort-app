import React from "react";

import { useRoomFilter } from "../../../context/room-filter-context";
import { getFormatedPrice, getMaxValue, getUnique } from "../../../helpers";

export const RoomsFilter = (props) => {
  const {
    roomType,
    setRoomType,
    guests,
    setGuests,
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
  } = useRoomFilter();

  const uniqueTypes = ["all", ...getUnique(props.rooms, "type")];
  const uniqueCapacity = [...getUnique(props.rooms, "capacity")];
  const maxSizeValue = getMaxValue(props.rooms, "size");
  const maxPriceValue = getMaxValue(props.rooms, "price");

  return (
    <div className="rooms-filter">
      <label htmlFor="room-filter-type" className="room-type-label">
        <span className="room-filter-title">Room type</span>
        <select
          value={roomType}
          onChange={(event) => setRoomType(event.target.value)}
          name="type"
          id="room-filter-type"
        >
          {uniqueTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="room-filter-guests" className="room-guests-label">
        <span className="room-filter-title">Guests</span>
        <select
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
          name="guests"
          id="room-filter-guests"
        >
          {uniqueCapacity.map((capacity, index) => (
            <option key={index} value={capacity}>
              {capacity}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="room-filter-price" className="room-price-label">
        <span className="room-filter-title">Room Price </span>
        <span className="room-price-span">{getFormatedPrice(maxPrice)}</span>
        <input
          value={maxPrice}
          onChange={(event) => setMaxPrice(parseInt(event.target.value))}
          min={0}
          max={maxPriceValue}
          name="price"
          type="range"
          id="room-filter-price"
        />
      </label>
      <label htmlFor="room-filter-size" className="room-size-label">
        <span className="room-filter-title">Room size</span>
        <div className="room-size-input">
          <input
            value={minSize}
            onChange={(event) => setMinSize(parseInt(event.target.value))}
            min={0}
            max={maxSizeValue}
            name="size"
            type="number"
            id="room-filter-size"
          />
          <input
            value={maxSize}
            onChange={(event) => setMaxSize(parseInt(event.target.value))}
            min={0}
            max={maxSizeValue}
            name="size"
            type="number"
            id="room-filter-size"
          />
        </div>
      </label>
      <label htmlFor="room-filter-breakfast" className="room-breakfast-label">
        <input
          checked={breakfastFlag}
          onChange={() => setBreakfastFlag(!breakfastFlag)}
          name="breakfast"
          type="checkbox"
          id="room-filter-breakfast"
        />
        <span className="room-filter-title">Breakfast</span>
      </label>
      <label htmlFor="room-filter-pets" className="room-pets-label">
        <input
          checked={petsFlag}
          onChange={() => setPetsFlag(!petsFlag)}
          name="pets"
          type="checkbox"
          id="room-filter-pets"
        />
        <span className="room-filter-title">Pets</span>
      </label>
    </div>
  );
};
