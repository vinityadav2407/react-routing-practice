import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

// basicaly through the NavLink we can apply the Styling like when link is active then
//  we can change the color or when change the font weight or whatever we want's to we can
// <-----  3 Ways of doning it ------->>
// ----[1st-> throught the style],
// ----[2nd->throught the className],
// ----[3rd->with the child element]

const Nav = () => {
  return (
    <nav className="navBar">
      <NavLink
        to="/"
        style={(e) => {
          return {
            color: e.isActive ? "red" : "",
            fontWeight: e.isActive ? "550" : "",
          };
        }}
      >
        Home
      </NavLink>

      <NavLink to="/user"
        className={(e) => {
          return e.isActive? 'activeLink':''
        }}
      >User</NavLink>

      <NavLink to="/about"   
       style={(e) => {
          return {
            color: e.isActive ? "red" : "",
            fontWeight: e.isActive ? "550" : "",
          };
        }}
      >About</NavLink>
    </nav>
  );
};

export default Nav;
