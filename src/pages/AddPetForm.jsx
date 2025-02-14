import React, { useState } from "react";

function AddPetForm({ handleAddPet }) {

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    hobbies: "",
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
        setFormData({ name: "", breed: "", age: "", hobbies: "", image: "" }); 
      })
      .catch((error) => console.error("Error adding pet:", error));
  };

  return (
    <>
    <form className="pet-form" onSubmit={onFormSubmit}>
      <h1>Add a Cat!</h1>
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
        name="hobbies"
        value={formData.hobbies}
        onChange={onFormChange}
        placeholder="Hobbies"
      />
      <input
      name="image"
      value={formData.image}
      onChange={onFormChange}
      placeholder="Image Url"
      />
      <button type="submit">Add Pet</button>
    </form>
    <img src="/images/keyboard-cat.gif" className="keyboard-cat-gif" alt="Keyboard Cat GIF" />
    <img/>
    </>
  );
}

export default AddPetForm;