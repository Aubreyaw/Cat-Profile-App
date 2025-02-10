import React from "react";

function PetClients({ pets }) {
  return (
    <div>
      <h1>Pet Clients</h1>
      {pets.map((pet) => (
        <div key={pet.id}>{pet.name}</div>
      ))}
    </div>
  );
}

export default PetClients;