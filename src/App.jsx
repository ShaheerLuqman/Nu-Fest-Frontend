// import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css";
import Competitions from "./pages/Competitions.jsx";
import Events from "./pages/Events.jsx";
import axios from "axios";
import { DataProvider } from "./context/DataContext.jsx";
import AddRegistrationForm from "./components/UI/RegistrationForm.jsx";
import Navbar from "./components/UI/Navbar.jsx";

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  return (
    <div>
      {/* </div> <div className="p-4 h-screen flex items-center justify-center"> */}
        <DataProvider>
          <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/:competition_name/register" element={<AddRegistrationForm />} />
      </Routes>
        </DataProvider>
    </div>
  );
}

export default App;
