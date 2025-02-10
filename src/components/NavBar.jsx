import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <Link to="/">Grooming Services</Link>
            <Link to="/appointments">Appointments</Link>
            <Link to="/pets">PetClients</Link>
        </nav>
    );
}

export default NavBar;