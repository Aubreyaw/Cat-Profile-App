import React from "react";
import PetCard from "../components/PetCard";

function PetClients({ pets }) {
  return (
    <div>
      <h1>Pet Clients</h1>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet}/>
      ))}
    </div>
  );
}

export default PetClients;