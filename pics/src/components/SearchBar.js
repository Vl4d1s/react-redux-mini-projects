import React from "react";

class SearchBar extends React.Component {
  // event.target.value holds user input
  onInputChange(event) {}

  render() {
    return (
      /* We do not put set of Parenthesis like: this.onInputChange()
         Becuse then the function will activated when the component will
         rendered. */
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>

            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
