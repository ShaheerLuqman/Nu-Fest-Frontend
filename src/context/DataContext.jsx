import React, { useEffect, useState } from "react";
import axios from "axios";
import DataContext from "./createContext.js";

export const DataProvider = ({ children }) => {
  // const [competitions, setCompetitions] = useState([]);
  const [competitionsLoading, setCompetitionsLoading] = useState(false);
  const [EventsLoading, setEventsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);
  // import { useState } from 'react';

  const competitionsData = [
    {
      id: 1,
      competition_name: "PUBG",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/hKFXtQG/Pubg.jpg",
      maxplayersperteam: 4,
      minplayersperteam: 4,
      price: 1000,
      category_id: 1,
      date: "2025-11-11",
      category_name: "Esports",
    },
    {
      id: 2,
      competition_name: "FIFA",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/ZfC2sDZ/Fifa.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 1000,
      category_id: 1,
      date: "2025-11-11",
      category_name: "Esports",
    },
    {
      id: 3,
      competition_name: "CSGO",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/g3pj614/Cs2.jpg",
      maxplayersperteam: 5,
      minplayersperteam: 5,
      price: 2500,
      category_id: 1,
      date: "2025-11-11",
      category_name: "Esports",
    },
    {
      id: 4,
      competition_name: "Tekken",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/DVVt3m7/Tekken.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 1000,
      category_id: 1,
      date: "2025-11-11",
      category_name: "Esports",
    },
    {
      id: 5,
      competition_name: "Slippery Futsal",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/C7x9Ggk/Slippery-Futsal.jpg",
      maxplayersperteam: 5,
      minplayersperteam: 5,
      price: 12500,
      category_id: 2,
      date: "2025-11-11",
      category_name: "Sports",
    },
    {
      id: 6,
      competition_name: "Table Tennis",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/jbGFmqt/Table-Tennis.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 1000,
      category_id: 2,
      date: "2025-11-11",
      category_name: "Sports",
    },
    {
      id: 7,
      competition_name: "Badminton",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/QCDjQ5V/Badminton.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 1000,
      category_id: 2,
      date: "2025-11-11",
      category_name: "Sports",
    },
    {
      id: 8,
      competition_name: "Dodge Ball",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/XCKLzH0/Dodgeball.jpg",
      maxplayersperteam: 5,
      minplayersperteam: 5,
      price: 10000,
      category_id: 2,
      date: "2025-11-11",
      category_name: "Sports",
    },
    {
      id: 9,
      competition_name: "Singing",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/pRDMH6Z/Singing.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 500,
      category_id: 3,
      date: "2025-11-11",
      category_name: "Extracurricular",
    },
    {
      id: 10,
      competition_name: "Drama",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/6NDXNBs/Drama.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 50,
      price: 3000,
      category_id: 3,
      date: "2025-11-11",
      category_name: "Extracurricular",
    },
    {
      id: 11,
      competition_name: "Talent Show",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/Z8tNnhK/Talent-Show.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 500,
      category_id: 3,
      date: "2025-11-11",
      category_name: "Extracurricular",
    },
    {
      id: 12,
      competition_name: "Eat All You Can",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/WWwsmvr/Eat-All-You-Can.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 1000,
      category_id: 4,
      date: "2025-11-11",
      category_name: "Demanding",
    },
    {
      id: 13,
      competition_name: "Squid Game",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/LDTXcTw/Squid-Games.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 1500,
      category_id: 4,
      date: "2025-11-11",
      category_name: "Demanding",
    },
    {
      id: 14,
      competition_name: "Tug of War",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/6g7B1gd/Tug-Of-War.jpg",
      maxplayersperteam: 5,
      minplayersperteam: 5,
      price: 6000,
      category_id: 4,
      date: "2025-11-11",
      category_name: "Demanding",
    },
    {
      id: 15,
      competition_name: "Fooseball",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/27fQM17/Fooseball.jpg",
      maxplayersperteam: 2,
      minplayersperteam: 2,
      price: 1000,
      category_id: 4,
      date: "2025-11-11",
      category_name: "Demanding",
    },
    {
      id: 16,
      competition_name: "Snooker",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/XCbNrzr/Snooker.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 500,
      category_id: 4,
      date: "2025-11-11",
      category_name: "Demanding",
    },
    {
      id: 17,
      competition_name: "Arm Wrestling",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/qx5KzzF/Arm-Wrestling.png",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 500,
      category_id: 4,
      date: "2025-11-11",
      category_name: "Demanding",
    },
    {
      id: 18,
      competition_name: "Power Lifting",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/Tvf9d8y/Power-Lifting.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 500,
      category_id: 4,
      date: "2025-11-11",
      category_name: "Demanding",
    },
    {
      id: 19,
      competition_name: "Sumo Wrestling",
      description: " ",
      number_of_teams: 0,
      imageurl: " ",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 500,
      category_id: 4,
      date: "2025-11-11",
      category_name: "Demanding",
    },
    {
      id: 20,
      competition_name: "Rodeo Bull",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/jZKPSXH/Rodeo-Bull.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 500,
      category_id: 4,
      date: "2025-11-11",
      category_name: "Demanding",
    },
    {
      id: 21,
      competition_name: "Reel Making",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/VN1WDp1/Reel-Making.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 1500,
      category_id: 5,
      date: "2025-11-11",
      category_name: "Digital",
    },
    {
      id: 22,
      competition_name: "Photography",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/gRZ0X11/Photography.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 1500,
      category_id: 5,
      date: "2025-11-11",
      category_name: "Digital",
    },
    {
      id: 23,
      competition_name: "Graffiti",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/SVpgSqS/Graffiti.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 500,
      category_id: 5,
      date: "2025-11-11",
      category_name: "Digital",
    },
    {
      id: 24,
      competition_name: "Speech Competition",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/kBGdSMY/Speech.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 500,
      category_id: 6,
      date: "2025-11-11",
      category_name: "Literary",
    },
    {
      id: 25,
      competition_name: "Human Ludo",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/JmWGBRp/Human-Ludo.jpg",
      maxplayersperteam: 4,
      minplayersperteam: 4,
      price: 1000,
      category_id: 6,
      date: "2025-11-11",
      category_name: "Literary",
    },
    {
      id: 26,
      competition_name: "Spelling Bee",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/FwMvPMy/Spelling-Bee.jpg",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 250,
      category_id: 6,
      date: "2025-11-11",
      category_name: "Literary",
    },
  ];

  const [competitions, setCompetitions] = useState(competitionsData);

  // useEffect(() => {
  //   fetchCompetitions();
  //   getEvents();
  // }, []);
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
