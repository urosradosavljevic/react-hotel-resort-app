import React from 'react'
import {useRoomData} from '../context/room-context'
// eslint-disable-next-line no-unused-vars
import {getUnique} from '../helpers'

export const RoomsFilter = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { handleFilterChange, roomType, guests,maxPrice,minSize,maxSize,breakfastFlag,petsFlag } = useRoomData();
    
    const uniqueTypes = ['all',...getUnique(props.rooms,'type')]
    const uniqueCapacity = ['all',...getUnique(props.rooms,'capacity')]
    return (
        <div className="rooms-filter">
            <label htmlFor="room-type" className="room-type-label">Room type
            <select value={roomType} onChange={handleFilterChange} name="type" id="room-type">
                {uniqueTypes.map((type,index) => <option key={index} value={type}>{type}</option>)}
            </select></label>
                 <label htmlFor="room-guests" className="room-guests-label">Guests
            <select value={guests} onChange={handleFilterChange} name="guests" id="room-guests">
                {uniqueCapacity.map((capacity,index) => <option key={index} value={capacity}>{capacity}</option>)}
            </select></label>
            {/*<label htmlFor="room-price" className="room-price-label">Room Price <span className="room-price-span"></span>
            <input value={maxPrice} onChange={handleFilterChange} min={0} max={maxPrice} name="price" type="range" id="room-price"/></label>
            <label htmlFor="room-size" className="room-size-label">Room size
            <input value={minSize} onChange={handleFilterChange} name="size" type="text" id="room-size"/>
            <input value={maxSize} onChange={handleFilterChange} name="size" type="text" id="room-size"/></label>
            <label htmlFor="room-breakfast" className="room-breakfast-label">Breakfast
            <input value={breakfastFlag} onChange={handleFilterChange} name="breakfast" type="checkbox" id="room-breakfast"/></label>
            <label htmlFor="room-pets" className="room-pets-label">Pets
            <input value={petsFlag} onChange={handleFilterChange} name="pets" type="checkbox" id="room-pets"/></label> */}
        </div>
    )
}
