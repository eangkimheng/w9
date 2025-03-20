import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0); // Store score value

  const getScoreBarStyle = () => {
    // Compute width based on score (0 to 100%)
    const scoreWidth = `${(score / 10) * 100}%`;

    // Compute color based on score
    let scoreColor = "#f3bc47"; // Default color
    if (score >= 8) {
      scoreColor = "#4CAF50"; // Green for high score
    } else if (score >= 5) {
      scoreColor = "#ff9800"; // Orange for medium score
    } else {
      scoreColor = "#f44336"; // Red for low score
    }

    // Return style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
          type="number"
          min="0"
          max="10"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        ></input>

        <div className="score-bar" style={{ width: "100%", height: "20px", border: "1px solid #ccc" }}>
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
