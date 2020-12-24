import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      /* We do not put set of Parenthesis like: this.onInputChange()
         Becuse then the function will activated when the component will
         rendered. */
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
