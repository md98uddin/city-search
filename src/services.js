import axios from "axios";

var group = {};

export function statesWithCity(arr) {
  var states = [];

  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      axios
        .get(`https://ctp-zip-api.herokuapp.com/zip/${arr[i]}`)
        .then((res) => {
          if (res.data) {
            if (!states.includes(res.data[0].State))
              states.push(res.data[0].State);
          }
        });
    }
  }

  return states;
}

export function cityDetails(arr) {
  var city = [];

  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      axios
        .get(`https://ctp-zip-api.herokuapp.com/zip/${arr[i]}`)
        .then((res) => {
          if (res.data) {
            const {
              Zipcode,
              City,
              Lat,
              Long,
              EstimatedPopulation,
              TotalWages,
            } = res.data[0];
            city.push(
              `${Zipcode}, ${City}, (${Lat} , ${Long}), ${
                EstimatedPopulation
                  ? EstimatedPopulation + " pop"
                  : " Population Not Reported"
              }, ${TotalWages ? "$" + TotalWages : " Wages Not Reported"}`
            );
          }
        });
    }
  }

  return city;
}
