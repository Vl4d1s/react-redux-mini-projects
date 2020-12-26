import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    // this line will prevent the browser from submitting the form
    // automatically and refreshing the page.
    // this is the default behavior of the
    event.preventDefault();
    // When we move props to a class-based component,
    // we need to add the word this before props.
    // In addition, we want to fach data from the
    // App component and not from the SearchBar.
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      /* We do not put set of Parenthesis like: this.onInputChange()
         Becuse then the function will activated when the component will
         rendered. */
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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
