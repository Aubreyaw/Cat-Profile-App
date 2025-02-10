import React from "react";

function GroomingServices({ services }) {
  return (
    <div>
      <h1>Grooming Services</h1>
      {services.map((services) => (
        <div key={services.id}>{services.type}</div>
      ))}
    </div>
  )
}

export default GroomingServices;