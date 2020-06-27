import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CityInput from "./components/CityInput";
import ZipCard from "./components/ZipCard";
import Axios from "axios";
import StatesCity from "./components/StatesCity";
import { statesWithCity } from "./services";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zips: null,
      city: null,
      states: null,
      view: "all",
    };
  }

  async componentDidMount() {
    if (this.state.city) {
      return this.fetchZips(this.state.city.toUpperCase());
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      view: e.target.value,
    });
  };

  onSubmitCity = async (e) => {
    this.setState({
      view: "all",
    });
    if (this.state.city) return this.fetchZips(this.state.city.toUpperCase());
  };

  fetchZips = (city) => {
    Axios.get(`http://ctp-zip-api.herokuapp.com/city/${city}`)
      .then((res) => {
        if (res.data)
          this.setState({
            zips: res.data,
            states: statesWithCity(res.data),
          });
      })
      .catch((error) => {
        this.setState({
          zips: ["NO RESULT"],
          states: ["NO RESULT"],
        });
      });
  };

  render() {
    const { zips, city, view, states } = this.state;

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
      </React.Fragment>
    );
  }
}

export default App;
