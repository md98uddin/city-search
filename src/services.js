import axios from "axios";

//get states with the provided city name
export function statesWithCity(arr) {
  var states = [];

  //check if arr is not null
  if (arr) {
    //call api for each zip in arr and check first index state value
    for (let i = 0; i < arr.length; i++) {
      axios
        .get(`https://ctp-zip-api.herokuapp.com/zip/${arr[i]}`)
        .then((res) => {
          if (res.data) {
            //if it not in array already, add to state arr
            if (!states.includes(res.data[0].State))
              states.push(res.data[0].State);
          }
        });
    }
  }
  return states;
}

//enumerate city details for each zip
export function cityDetails(arr) {
  var city = [];

  //check if arr is not null
  if (arr) {
    //run api for each zip and get the info properties
    for (let i = 0; i < arr.length; i++) {
      axios
        .get(`https://ctp-zip-api.herokuapp.com/zip/${arr[i]}`)
        .then((res) => {
          //if success, push formatted description
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
