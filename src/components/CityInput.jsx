import React from "react";
import SortOptions from "./SortOptions";

const CityInput = ({ onChange, onSubmit, view, onSelect }) => {
  return (
    <div className="input-form" style={{ marginLeft: "38%", marginTop: "2vh" }}>
      <label style={{ marginRight: 5 }}>City Name</label>
      <input
        placeholder="Type in a city"
        onChange={onChange}
        id="city"
        style={{
          height: 40,
        }}
      />
      <button
        className="btn btn-primary"
        onClick={(e) => onSubmit(e)}
        style={{ marginLeft: 5, height: 40, marginBottom: 5 }}
      >
        Search
      </button>
      <SortOptions view={view} onSelect={onSelect} />
    </div>
  );
};

export default CityInput;
