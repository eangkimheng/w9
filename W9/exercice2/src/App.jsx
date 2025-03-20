import React, { useState } from "react";
import StuffForm from "./components/StuffForm";
import StuffCard from "./components/StuffCard";

const INITIAL_STUFFS = [
  { name: "Banana", price: 54.5 },
  { name: "Computer", price: 100.5 },
  { name: "Table", price: 60 },
];

export default function App() {
  const [stuffs, setStuffs] = useState(INITIAL_STUFFS);

  // Function to handle adding new stuff to the list
  const handleAddStuff = (newStuff) => {
    console.log(`A new object named ${newStuff.name}, price ${newStuff.price}$ will be added to the list`);

    // Update the stuffs array with the new stuff
    setStuffs((prevStuffs) => [...prevStuffs, newStuff]);
  };

  return (
    <>
      <header>
        <h1>My Stuff</h1>
      </header>

      <StuffForm onAddStuff={handleAddStuff} />

      <div className="stuff-list">
        {stuffs.map((stuff, index) => (
          <StuffCard key={index} name={stuff.name} price={stuff.price} />
        ))}
      </div>
    </>
  );
}
