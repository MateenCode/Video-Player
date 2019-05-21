import React, { PureComponent } from "react";
import SearchBar from "./SearchBar";

export default class App extends PureComponent {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}
