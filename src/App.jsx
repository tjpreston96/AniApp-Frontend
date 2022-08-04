import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Search from "./pages/Search/Search";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import * as authService from "./services/authService";
import PrivateWrapper from "./utils/PrivateWrapper/PrivateWrapper";
import Collection from "./pages/Collection/Collection";


const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />

        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        {/* Protected Routes */}
        <Route element={<PrivateWrapper user={user} />}>
          <Route path="/search" element={<Search />} />
          <Route path="/collection/:type" element={<Collection />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route
            path="/changePassword"
            element={
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            }
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
