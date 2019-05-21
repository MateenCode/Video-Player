import React, { PureComponent } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends PureComponent {
  state = {
    videos: [],
    selectedVideo: null
  };

  handleSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      selectedVideo: response.data.items[0],
      videos: response.data.items
    });
  };

  videoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videoSelect={this.videoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
