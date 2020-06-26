import React from "react";

const ZipCard = ({ zips, view }) => {
  return (
    view === "all" && (
      <div className="container" style={{ textAlign: "center" }}>
        {zips && (
          <div
            className="card"
            style={{
              textAlign: "center",
              height: "500px",
              overflowY: "scroll",
            }}
          >
            <h5 className="card-header">All Zips in City</h5>
            <div className="card-body">
              {zips.map((zip, index) => (
                <p className="card-text" key={zip}>
                  {index + 1}:<p style={{ fontWeight: "bold" }}>{zip}</p>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default ZipCard;
