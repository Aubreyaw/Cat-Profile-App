import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./Routes.jsx";
import NavBar from "./components/NavBar.jsx";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pets")
    .then((response) => response.json())
    .then((data) => {
      console.log("Pets data:", data);
      setPets(data);
    })
    .catch((error) => console.error("Error fetching pets:", error));
  },[])

  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]); 
  };

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <RoutesComponent 
        pets={pets} handleAddPet={handleAddPet}/>
      </div>
    </BrowserRouter>
  );
}

export default App;