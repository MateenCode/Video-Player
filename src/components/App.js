import React, { PureComponent } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

export default class App extends PureComponent {
  state = {
    videos: []
  };

  handleSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.handleSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
