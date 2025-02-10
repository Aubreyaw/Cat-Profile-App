import React from "react";
import AppointmentCard from "../components/AppointmentCard";

function Appointments({ appointments }) {
  return (
    <div>
        <h1>Appointments</h1>
        {appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment}/>
        ))}
    </div>
  );
}

export default Appointments;