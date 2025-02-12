import React from "react";
import PetCard from "../components/PetCard";

function Pets({ pets }) {
  return (
    <div>
      <h1 className="h1">Pets</h1>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

export default Pets;