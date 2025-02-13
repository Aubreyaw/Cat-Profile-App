import React from "react";

function PetCard({ pet }) {
    return (
        <div>
            <h2 className="pet-name">{pet.name}</h2>
            <ul className="card" >
                <li> Species: {pet.species}</li>
                <li>Breed: {pet.breed}</li>
                <li> Age: {pet.age}</li>
            </ul>
        </div>
  );
}

export default PetCard;