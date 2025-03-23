import React, { useState } from "react";
import "./App.css"; // Import external CSS

const App = () => {
  const [bgColor, setBgColor] = useState("#f4f4f4");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="content">
        <h1>Background Changer</h1>
        <div className="buttons">
          <button className="btn red" onClick={() => changeColor("#ff4d4d")}>Red</button>
          <button className="btn blue" onClick={() => changeColor("#4da6ff")}>Blue</button>
          <button className="btn green" onClick={() => changeColor("#4dff88")}>Green</button>
          <button className="btn yellow" onClick={() => changeColor("#ffff4d")}>Yellow</button>
          <button className="btn reset" onClick={() => changeColor("#f4f4f4")}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
