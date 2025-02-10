import React from "react";

function AppointmentCard({ appointment }) {
    return (
        <div>
            <h2>{appointment.service}</h2>
            {/* display other appointment data */}
        </div>
  );
    
}

export default AppointmentCard;