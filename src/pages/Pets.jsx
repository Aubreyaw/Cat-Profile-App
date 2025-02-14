import React from "react";
import PetCard from "../components/PetCard";

function Pets({ pets }) {
  return (
    <div className="pets-container">
      <h1 className="pets-title">Cat Profiles</h1>
      <div className="pet-grid">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default Pets;
