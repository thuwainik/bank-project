import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { logout } from "../api/auth";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    setUser(false);
    logout();
  };
  return (
    <nav>
      <div className="">
        <div className="">
          <NavLink to="/home" className="">
            Home
          </NavLink>
          <NavLink to="/users" className="">
            Users
          </NavLink>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <NavLink to="/login" className="">
                Login
              </NavLink>
              <NavLink to="/register" className="">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
