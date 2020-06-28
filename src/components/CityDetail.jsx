import React from "react";

const CityDetails = ({ cities, view }) => {
  return (
    view === "details" && (
      <div
        className="container"
        style={{ textAlign: "center", height: "500px", overflowY: "scroll" }}
      >
        <p style={{ marginLeft: "120px" }}>
          Zip Details Order | City, Geolocation, Population, Total Wages{" "}
        </p>
        {cities &&
          cities.map((city) => (
            <div
              class="card"
              style={{
                fontWeight: "bolder",
                width: "40rem",
                textAlign: "center",
                marginLeft: "30%",
              }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 25 }}>
                  Zip: {city.substring(0, 5)}
                </h5>
                <p className="card-text">{city.substring(6)}</p>
                <p>-----------------------------------------</p>
              </div>
            </div>
          ))}
      </div>
    )
  );
};

export default CityDetails;
