import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // The first function that pops up when the component will created.
  constructor(props) {
    super(props); // A ref to React.Component constructor function.
    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" };
  }

  // React says that we have to define render function.
  render() {
    // We dont want to initialize things in render function,
    // Because it is activated in every update of the state.
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setState method every time we want to update our state.
        this.setState({ lat: position.coords.latitude });

        // We did not:
        // this.state.lat = position.coords.latitude;
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );

    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
