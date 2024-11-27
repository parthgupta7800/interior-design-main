import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./Components/Categories";
import HeroPage from "./Components/HeroPage";
import NavBar from "./Components/NavBar";
import AboutPage from "./pages/About/AboutPage";
import ExplorePage from "./pages/Explore/ExplorePage";
import DesignersPage from "./pages/Designers/DesignersPage";
import LivingRoomDesignsPage from "./Components/LivingRoomDesignsPage";
import KitchenDesignsPage from "./Components/KitchenDesignsPage";
import BedroomDesignsPage from "./Components/BedroomDesignsPage";
import BathroomDesignsPage from "./Components/BathroomDesignsPage";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Login/Register.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer.jsx";

const InteriorDesignPlatform = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    isAuthorized();
  }, []);

  const isAuthorized = async () => {
    try {
      const url = `http://localhost:4444/isAuthorized`;
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      });
      setAuth(response.status === 200); // true if status is 200
    } catch (error) {
      console.error("Error fetching user data:", error);
      setAuth(false);
    }
  };

  if (auth === null) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth
  }

  return (
    <>
      <Toaster />
      <div className="app">
        {auth ? <NavBar setAuth={setAuth}/> : null} {/* NavBar for authenticated users */}
        <Routes>
          {!auth ? (
            <>
              <Route path="*" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login setAuth={setAuth} />} />
              <Route path="/register" element={<Register />} />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={
                  <>
                    <HeroPage />
                    <Categories />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/designers" element={<DesignersPage />} />
              <Route path="/living-room" element={<LivingRoomDesignsPage />} />
              <Route path="/kitchen" element={<KitchenDesignsPage />} />
              <Route path="/bedroom" element={<BedroomDesignsPage />} />
              <Route path="/bathroom" element={<BathroomDesignsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
        {auth ? <Footer /> : null} {/* Footer for authenticated users */}
      </div>
    </>
  );
};

export default InteriorDesignPlatform;
