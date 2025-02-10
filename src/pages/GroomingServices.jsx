import React from "react";
import ServiceCard from "../components/ServiceCard";

function GroomingServices({ services }) {
  return (
    <div>
      <h1>Grooming Services</h1>
      {services.map((service) => (
       <ServiceCard key={service.id} service={service}/>
      ))}
    </div>
  )
}

export default GroomingServices;