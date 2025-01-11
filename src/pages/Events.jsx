import React, { useContext, useEffect, useMemo, useState } from "react";
import Navbar from "../components/UI/Navbar.jsx";
import EventSlider from "../components/Events/EventSlider.jsx";
import SearchBar from "../components/Events/SearchBar.jsx";
import EventCard from "../components/Events/EventCard.jsx";
import { fetchEvents } from "../utils/fetchEvents.js";
import DataContext from "../context/createContext.js";
import { Link } from "react-router-dom";


const Events = () => {
  //const [events, setEvents] = useState([]);
  const {events } = useContext(DataContext)
  
  const [searchQuery, setSearchQuery] = useState("");
  // const [filteredEvents, setFilteredEvents] = useState(events);

  // useEffect(()=>{
  //   // console.log('events = ',events)
  //   setFilteredEvents(events);
  // },[events])

  const filteredEvents = useMemo(() => {
    if (searchQuery.trim() === "") {
      return events;
    }
    return events.filter(
      (event) =>
        event.event_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [events, searchQuery]); // Only recalculated when `events` or `searchQuery` changes

  return (
    <div className="w-full">
      {/* <Navbar /> */}
      <EventSlider events={events} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="p-8 bg-gray-100">
        <h2 className="text-center text-4xl font-semibold text-orange-500 mb-10">
          Events
        </h2>
        {filteredEvents.length === 0 ? (
          <p className="text-center text-xl text-gray-500">
            No events found for {searchQuery}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredEvents.map((event) => (
              <>
              <EventCard key={event.id} event={event} />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
