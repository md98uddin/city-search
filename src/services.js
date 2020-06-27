import axios from "axios";

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
