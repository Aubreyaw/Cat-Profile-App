import React, { useState } from "react";

function AddPetForm({ handleAddPet }) {

  const [formData, setFormData] = useState({
    species: "",
    name: "",
    breed: "",
    age: "",
    image: ""
  });

  const onFormChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, 
    }));
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
        setFormData({ species: "", name: "", breed: "", age: "", image: "" }); 
      })
      .catch((error) => console.error("Error adding pet:", error));
  };

  return (
    <form className="pet-form" onSubmit={onFormSubmit}>
      <h1>Add Pet</h1>
      <input
        name="species"
        value={formData.species}
        onChange={onFormChange}
        placeholder="Species"
      />
      <input
        name="name"
        value={formData.name}
        onChange={onFormChange}
        placeholder="Pet Name"
      />
      <input
        name="breed"
        value={formData.breed}
        onChange={onFormChange}
        placeholder="Breed"
      />
      <input
        name="age"
        value={formData.age}
        onChange={onFormChange}
        placeholder="Age"
      />
      <input
      name="image"
      value={formData.image}
      onChange={onFormChange}
      placeholder="Image Url"
      />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default AddPetForm;