import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  /*
  // The first function that pops up when the component will created.
  constructor(props) {
    super(props); // A ref to React.Component constructor function.
    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" };
    // We dont want to initialize things in render function,
    // Because it is activated in every update of the state.
  }
  */

  // Exactly the same as setting up a constructor and call super
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
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
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader />;
  }

  // React says that we have to define render function.
  render() {
    // A way to bind together functionality under one div.
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
