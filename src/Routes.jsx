import React from "react";
import { Routes, Route } from "react-router-dom"; 
import AboutPage from "./pages/AboutPage";
import Pets from "./pages/Pets";
import AddPetForm from "./pages/AddPetForm";

function RoutesComponent({ services, pets, handleAddPet }) {
    return (
        <Routes>
            <Route path="/" element={<AboutPage services={services}/>} />
            <Route path="/pets" element={<Pets pets={pets} />} />
            <Route path="/add-pet" element={<AddPetForm handleAddPet={handleAddPet} />} /> 
        </Routes>
    );
}

export default RoutesComponent;