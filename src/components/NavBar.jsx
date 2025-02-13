import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
    return(
        <nav>
            <ul>
            <NavLink to="/" className="nav-link">Welcome</NavLink>
            <NavLink to="/pets" className="nav-link">Pets</NavLink>
            <NavLink to="/add-pet" className="nav-link">Add Pet</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;