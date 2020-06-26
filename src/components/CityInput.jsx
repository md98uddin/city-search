import React from "react";

const CityInput = ({ onChange, onSubmit }) => {
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
    </div>
  );
};

export default CityInput;
