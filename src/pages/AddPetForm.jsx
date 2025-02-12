import React, { useState } from "react";

function AddPetForm({ handleAddPet }) {
  const [formData, setFormData] = useState({
    species: "",
    name: "",
    breed: "",
    age: "",
  });

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPet) => {
        handleAddPet(newPet);
        setFormData({ species: "", name: "", breed: "", age: "" });
      })
      .catch((error) => console.error("Error adding pet:", error));
  };

  return (

    <form className="pet-form" onSubmit={onFormSubmit}>
      <h1>Add Pet</h1>
      <input type="text" name="species" placeholder="Species" value={formData.species} onChange={onFormChange} />
      <input type="text" name="name" placeholder="Pet Name" value={formData.name} onChange={onFormChange} />
      <input type="text" name="breed" placeholder="Breed" value={formData.breed} onChange={onFormChange} />
      <input type="text" name="age" placeholder="Age" value={formData.age} onChange={onFormChange} />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default AddPetForm;