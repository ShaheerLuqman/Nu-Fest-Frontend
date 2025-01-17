import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css";
import Competitions from "./pages/Competitions.jsx";
import Events from "./pages/Events.jsx";
import Stall from "./pages/Stall.jsx";
import axios from "axios";
import { DataProvider } from "./context/DataContext.jsx";
import AddRegistrationForm from "./components/UI/RegistrationForm.jsx";
import Navbar from "./components/UI/Navbar.jsx";
import Footer from "./components/UI/Footer.jsx";

function App() {
  axios.defaults.baseURL = `${import.meta.env.VITE_BASEURL}`;
  return (
    <div>
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/stall" element={<Stall />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route
            path="/:competition_name/register"
            element={<AddRegistrationForm />}
          />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
