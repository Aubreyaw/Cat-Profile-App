import React from "react";

function Appointments({ appointments }) {
  return (
    <div>
        <h1>Appointments</h1>
        {appointments.map((appointment) => (
            <div key={appointment.id}>{appointment.service}</div>
        ))}
    </div>
  );
}

export default Appointments;