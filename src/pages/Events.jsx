import { useContext, useMemo, useState } from "react";
import EventSlider from "../components/Events/EventSlider.jsx";
import SearchBar from "../components/Events/SearchBar.jsx";
import EventCard from "../components/Events/EventCard.jsx";
import DataContext from "../context/createContext.js";

const Events = () => {
  const { events } = useContext(DataContext);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = useMemo(() => {
    if (searchQuery.trim() === "") {
      return events;
    }
    return events.filter(
      (event) =>
        event.event_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [events, searchQuery]);
  return (
    <div className="w-full">
      {/* <Navbar /> */}
      <EventSlider events={events} />
      <div className="p-8 bg-gray-100">
        <h2 className="text-center lg:text-6xl text-4xl font-semibold second my-10">
          EVENTS
        </h2>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

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
