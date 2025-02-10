import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return(
        <nav>
            <ul>
            <NavLink to="/" className="nav-link">Grooming Services</NavLink>
            <NavLink to="/appointments" className="nav-link">Appointments</NavLink>
            <NavLink to="/pets" className="nav-link">PetClients</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;