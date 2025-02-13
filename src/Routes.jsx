import React from "react";
import { Routes, Route } from "react-router-dom"; 
import WelcomePage from "./pages/WelcomePage";
import Pets from "./pages/Pets";
import AddPetForm from "./pages/AddPetForm";

function RoutesComponent({ services, pets, handleAddPet }) {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage services={services}/>} />
            <Route path="/pets" element={<Pets pets={pets} />} />
            <Route path="/add-pet" element={<AddPetForm handleAddPet={handleAddPet} />} /> 
        </Routes>
    );
}

export default RoutesComponent;