import React, { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  // State for name and price
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Handle changes for name input
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Handle changes for price input
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  // Handle form submission when "Add" is clicked
  const handleAddClick = () => {
    if (name && price) {
      // Send the new stuff to the App component
      onAddStuff({ name, price: parseFloat(price) });
      console.log(`A new object named ${name}, price ${price}$ will be added to the list`);

      // Clear input fields
      setName("");
      setPrice("");
    }
  };

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input
        type="text"
        placeholder="Banana"
        value={name}
        onChange={handleNameChange}
      />

      <p>Stuff price</p>
      <input
        type="number"
        placeholder="15"
        value={price}
        onChange={handlePriceChange}
      />

      <button type="button" onClick={handleAddClick}>
        Add Stuff
      </button>
    </form>
  );
}
