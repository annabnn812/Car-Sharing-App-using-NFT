import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-black bg-black">
        <div className="container">
        
          
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                <p className="m-0 text-center text-white">
                  Home </p>
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rent">
                <p className="m-0 text-center text-white">
                  Rent </p>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <p className="m-0 text-center text-white">
                  About </p>
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/help">
                <p className="m-0 text-center text-white">
                  Help </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rules">
                <p className="m-0 text-center text-white">
                  Rules </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                <p className="m-0 text-center text-white">
                  Contact </p>
                </NavLink>
              </li>
          
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
