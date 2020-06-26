import React from "react";

const SortOptions = ({ view, onSelect }) => {
  return (
    <select value={view} onChange={onSelect} style={{ marginLeft: "1.5vw" }}>
      <option value="all">select</option>
      <option value="states">states with city</option>
      <option value="group">group by states</option>
      <option value="details">details of city</option>
    </select>
  );
};

export default SortOptions;
