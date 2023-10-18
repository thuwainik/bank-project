import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserContext from "./context/UserContext";
import { useState } from "react";
import { checkToken } from "./api/auth";
import { useEffect } from "react";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/Home" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
