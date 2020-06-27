import React from "react";

const StatesCity = ({ states, view, city }) => {
  console.log("states", states);
  return view === "states" ? (
    <div className="container card" style={{ textAlign: "center" }}>
      <div className="card-body">
        <h5 className="card-title">
          States with a city named {city ? city.toUpperCase() : "None"}
        </h5>
        <p>{states.join(" | ")}</p>
      </div>
    </div>
  ) : null;
};

export default StatesCity;
