import React from "react";

function PetCard({ pet }) {
    return (
        <div>
            <h2>{pet.name}</h2>
            {/* display other data */}
        </div>
  );
}

export default PetCard;