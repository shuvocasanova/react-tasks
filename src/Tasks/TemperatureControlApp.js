import React, { useState } from "react";
import "./Temperature.css";

const TemperatureControlApp = () => {
  const [value, setValue] = useState(0);
  const [temperatureColor, setTemperatureColor] = useState("");
  const increment = () => {
    const newTemp = value + 1;
    if (newTemp >= 20) {
      setTemperatureColor("hot");
    }
    setValue(newTemp);
  };
  const decrement = () => {
    if (value > 0) {
        const newTemp = value - 1;
        if (newTemp < 20) {
            setTemperatureColor("cold");
        }
        setValue(newTemp);
    }
    
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container ">
        <div className={`temperature-display ${temperatureColor}`}>{value}</div>
      </div>
      <div className="button-container">
        <button className="button" onClick={increment}>
          +
        </button>
        <button className="button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default TemperatureControlApp;
