import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    this.setState({
      videos: response.data.items,
    });
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui_container" style={{ marginTop: "1em" }}>
        <div className="ui_search">
          <SearchBar handleFormSubmit={this.handleSubmit} />
        </div>
        <div className="ui_grid">
          <div className="ui_row">
            <div className="videobox">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="videos_right">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
