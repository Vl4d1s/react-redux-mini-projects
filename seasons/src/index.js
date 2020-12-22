import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props); // A ref to React.Component constructor function. Allways the 1st thing.

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null };
  }

  // React says that we have to define render function.
  render() {
    // We dont want to initialize things in render function,
    // Because it is activated in every update of the state.
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setState method evry time we want to update our state.
        this.setState({ lat: position.coords.latitude });

        // We did not:
        // this.state.lat = position.coords.latitude;
      },
      (err) => console.log(err)
    );

    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
