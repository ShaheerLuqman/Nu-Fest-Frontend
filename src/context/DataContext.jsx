import React, { useEffect, useState } from "react";
import axios from "axios";
import DataContext from "./createContext.js";

export const DataProvider = ({ children }) => {
  // const [competitions, setCompetitions] = useState([]);
  const [competitionsLoading, setCompetitionsLoading] = useState(false);
  const [EventsLoading, setEventsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [events, setEvents] = useState([]);
  // import { useState } from 'react';
  const [events, setEvents] = useState([
    {
      event_id: 1,
      event_name: "Cultural Fest",
      society_id: 3,
      image_url: "../glimpses/1.jpg",
      event_date: "2024-01-05",
      event_description: "Hello",
    },
    {
      event_id: 2,
      event_name: "Film Screening",
      society_id: 2,
      image_url: "../glimpses/2.jpg",
      event_date: "2024-02-10",
      event_description: "Hello",
    },
    {
      event_id: 3,
      event_name: "Robotics Workshop",
      society_id: 1,
      image_url: "../glimpses/3.jpg",
      event_date: "2024-02-10",
      event_description: "Hello",
    },
    {
      event_id: 4,
      event_name: "Stand-Up Comedy",
      society_id: 5,
      image_url: "../glimpses/4.jpg",
      event_date: "2024-01-01",
      event_description: "Hello",
    },
    {
      event_id: 5,
      event_name: "Hackathon",
      society_id: 2,
      image_url: "../glimpses/5.jpg",
      event_date: "2024-11-02",
      event_description: "Hello",
    },
    {
      event_id: 6,
      event_name: "Cultural Fest",
      society_id: 2,
      image_url: "../glimpses/6.jpg",
      event_date: "2024-07-03",
      event_description: "Hello",
    },
    {
      event_id: 7,
      event_name: "Stand-Up Comedy",
      society_id: 1,
      image_url: "../glimpses/7.jpg",
      event_date: "2024-11-28",
      event_description: "Hello",
    },
    {
      event_id: 8,
      event_name: "Coding Jam",
      society_id: 5,
      image_url: "../glimpses/8.jpg",
      event_date: "2024-10-17",
      event_description: "Hello",
    },
    {
      event_id: 9,
      event_name: "Open Mic",
      society_id: 6,
      image_url: "../glimpses/9.jpg",
      event_date: "2024-02-18",
      event_description: "Hello",
    },
    {
      event_id: 10,
      event_name: "Sports Meet",
      society_id: 6,
      image_url: "../glimpses/10.jpg",
      event_date: "2024-07-14",
      event_description: "Hello",
    },
    {
      event_id: 11,
      event_name: "Cultural Fest",
      society_id: 2,
      image_url: "../glimpses/11.jpg",
      event_date: "2024-09-13",
      event_description: "Hello",
    },
    {
      event_id: 12,
      event_name: "Cultural Fest",
      society_id: 4,
      image_url: "../glimpses/12.jpg",
      event_date: "2024-08-16",
      event_description: "Hello",
    },
    {
      event_id: 13,
      event_name: "Coding Jam",
      society_id: 2,
      image_url: "../glimpses/13.jpg",
      event_date: "2024-12-21",
      event_description: "Hello",
    },
    {
      event_id: 14,
      event_name: "Tech Talk",
      society_id: 6,
      image_url: "../glimpses/14.jpg",
      event_date: "2024-10-09",
      event_description: "Hello",
    },
    {
      event_id: 15,
      event_name: "Stand-Up Comedy",
      society_id: 1,
      image_url: "../glimpses/15.jpg",
      event_date: "2024-09-15",
      event_description: "Hello",
    },
    {
      event_id: 16,
      event_name: "Tech Talk",
      society_id: 6,
      image_url: "../glimpses/16.jpg",
      event_date: "2024-11-27",
      event_description: "Hello",
    },
    {
      event_id: 17,
      event_name: "Film Screening",
      society_id: 5,
      image_url: "../glimpses/17.jpg",
      event_date: "2024-05-26",
      event_description: "Hello",
    },
    {
      event_id: 18,
      event_name: "Tech Talk",
      society_id: 4,
      image_url: "../glimpses/18.jpg",
      event_date: "2024-07-25",
      event_description: "Hello",
    },
  ]);

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
      date: "11-02-2025",
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
      date: "11-02-2025",
      category_name: "Esports",
    },
    {
      id: 3,
      competition_name: "CS 2",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/g3pj614/Cs2.jpg",
      maxplayersperteam: 5,
      minplayersperteam: 5,
      price: 2500,
      category_id: 1,
      date: "11-02-2025",
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
      date: "11-02-2025",
      category_name: "Esports",
    },
    {
      id: 5,
      competition_name: "Slippery Futsal",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/pRch0BP/Slippery-Futsal.jpg",
      maxplayersperteam: 5,
      minplayersperteam: 5,
      price: 8000,
      category_id: 2,
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
      category_name: "Sports",
    },
    {
      id: 8,
      competition_name: "Dodge Ball",
      description: " ",
      number_of_teams: 0,
      imageurl: "https://i.ibb.co/kBV76G2/Dodgeball.jpg",
      maxplayersperteam: 5,
      minplayersperteam: 5,
      price: 8000,
      category_id: 2,
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
      category_name: "Demanding",
    },
    {
      id: 17,
      competition_name: "Arm Wrestling",
      description: " ",
      number_of_teams: 0,
      imageurl:
        "https://i.ibb.co/NK0xqDv/Screenshot-from-2025-01-16-03-00-07.png",
      maxplayersperteam: 1,
      minplayersperteam: 1,
      price: 500,
      category_id: 4,
     date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
     date: "11-02-2025",
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
     date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
      date: "11-02-2025",
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
