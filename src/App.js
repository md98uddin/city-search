import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CityInput from "./components/CityInput";
// import ZipCards from "./components/ZipCards";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zips: null,
      city: "SACRAMENTO",
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

  onSubmitCity = async (e) => {
    return this.fetchZips(this.state.city.toUpperCase());
  };

  fetchZips = (city) => {
    Axios.get(`http://ctp-zip-api.herokuapp.com/city/${city}`)
      .then((res) => {
        if (res.data)
          this.setState({
            zips: res.data,
          });
      })
      .catch((error) => {
        this.setState({
          zips: "no results",
        });
      });
  };

  render() {
    console.log("city", this.state.city);
    console.log("zips", this.state.zips);

    return (
      <React.Fragment>
        <Navbar
          title="CitySearch"
          zips={this.state.zips}
          city={this.state.city}
        />
        <CityInput onChange={this.handleChange} onSubmit={this.onSubmitCity} />
        {/* <ZipCards zips={this.state.zips} /> */}
      </React.Fragment>
    );
  }
}

export default App;
