import React, { useEffect, useState } from "react";
import axios from "axios";
import DataContext from "./createContext.js";

export const DataProvider = ({ children }) => {
  const [competitions, setCompetitions] = useState([]);
  const [competitionsLoading, setCompetitionsLoading] = useState(true);
  const [EventsLoading, setEventsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await axios.get("/api/competitions/getcompetitions");
        setCompetitions(response.data);
        setCompetitionsLoading(false);
      } catch (err) {
        setError(err.message);
        setCompetitionsLoading(false);
      }
    };

    fetchCompetitions();
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const response = await axios.get("/api/events/getevents");
      setEvents(response.data);
    } catch (error) {
      console.error("Failed to fetch events:", error.message);
    }
  };

  const addTeam = async (teamData) => {
    try {
      const response = await axios.post("/api/teams", teamData);
      return response.data;
    } catch (error) {
      console.error("Failed to add team:", error.message);
      throw error;
    }
  };

  return (
    <DataContext.Provider
      value={{
        competitions,
        events,
        addTeam,
        competitionsLoading,
        error,
        setCompetitions,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
