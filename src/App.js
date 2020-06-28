import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CityInput from "./components/CityInput";
import ZipCard from "./components/ZipCard";
import Axios from "axios";
import StatesCity from "./components/StatesCity";
import { statesWithCity, cityDetails } from "./services";
import CityDetails from "./components/CityDetail";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zips: null,
      city: null,
      states: null,
      cities: null,
      view: "all",
    };
  }

  //on load call api if city was provided
  async componentDidMount() {
    if (this.state.city) {
      return this.fetchZips(this.state.city.toUpperCase());
    }
  }

  //handle and set city input field
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //handle and set sort options
  handleSelect = (e) => {
    this.setState({
      view: e.target.value,
    });
  };

  //onsubmit, call api if city is not null
  onSubmitCity = async (e) => {
    this.setState({
      view: "all",
    });
    if (this.state.city) return this.fetchZips(this.state.city.toUpperCase());
  };

  //call api with passed city parameter
  fetchZips = (city) => {
    Axios.get(`http://ctp-zip-api.herokuapp.com/city/${city}`)
      .then((res) => {
        //on success, set state
        if (res.data)
          this.setState({
            zips: res.data,
            states: statesWithCity(res.data),
            cities: cityDetails(res.data),
          });
      })
      .catch((error) => {
        //if error, set error states
        this.setState({
          zips: ["NO RESULT"],
          states: ["NO RESULT"],
          cities: null,
        });
      });
  };

  render() {
    const { zips, city, view, states, cities } = this.state;

    return (
      <React.Fragment>
        <Navbar title="CitySearch" zips={zips} city={city} />
        <CityInput
          onChange={this.handleChange}
          onSubmit={this.onSubmitCity}
          view={view}
          onSelect={this.handleSelect}
        />
        <ZipCard zips={this.state.zips} view={view} />
        <StatesCity states={states} view={view} city={city} />
        <CityDetails cities={cities} view={view} />
      </React.Fragment>
    );
  }
}

export default App;
