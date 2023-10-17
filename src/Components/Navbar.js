import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="">
        <div className="">
          <NavLink to="/" className="">
            Home
          </NavLink>
          <NavLink to="/notes" className="">
            Notes
          </NavLink>
          <NavLink to="/users" className="">
            Users
          </NavLink>

          <>
            <NavLink to="/login" className="">
              Login
            </NavLink>
            <NavLink to="/register" className="">
              Register
            </NavLink>
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
