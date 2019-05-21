import React, { PureComponent } from "react";

export default class SearchBar extends PureComponent {
  state = {
    term: "",
  };

  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // TODO: make sure we call
    // callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label> Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
