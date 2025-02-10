import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./Routes.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [pets, setPets] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pets")
    .then((response) => response.json())
    .then((data) => {
      console.log("Pets data:", data);
      setPets(data);
    })
    .catch((error) => console.error("Error fetching pets:", error));

    fetch("http://localhost:3000/appointments")
    .then((response) => response.json())
    .then((data) => {
      console.log("Appointments data:", data);
      setAppointments(data);
    })
    .catch((error) => console.error("Error fetching appointments:", error));

    fetch("http://localhost:3000/services")
    .then((response) => response.json())
    .then((data) => {
      console.log("Services data:", data);
      setServices(data);
    })
    .catch((error) => console.error("Error fetching services:", error));
  },[])

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <RoutesComponent pets={pets} appointments={appointments} services={services} />
      </div>
    </BrowserRouter>
  );
}

export default App;