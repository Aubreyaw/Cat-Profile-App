import React, { useState } from "react";

function PetCard({ pet }) {
  const [likes, setLikes] = useState(pet.likes || 0);

  const handleLike = () => {
    setLikes(likes + 1);

    fetch(`http://localhost:3000/pets/${pet.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    }).catch((error) => console.error("Error updating likes:", error));
  };

  return (
    <div className="pet-card">
      <h2 className="pet-name">{pet.name}</h2>
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <ul className="card-list">
        <li>Breed: {pet.breed}</li>
        <li>Age: {pet.age}</li>
        <li>Hobbies: {pet.hobbies}</li>
      </ul>
      <p> Show some love!</p>
      <button className="like-button" onClick={handleLike}>
        ❤️ {likes}
      </button>
    </div>
  );
}

export default PetCard;