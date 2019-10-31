import React from 'react';
import routes from "../config/routes";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      {routes.map(route => (
        <NavLink to={route.path}>{route.title}</NavLink>
      ))}
    </div>
  );
};

export default NavBar;
