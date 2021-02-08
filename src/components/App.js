import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selected_video: null };

  componentDidMount() {
    this.onInputSubmit("trending");
  }

  onInputSubmit = async (search_term) => {
    const response = await youtube.get("/search", {
      params: { q: search_term },
    });
    this.setState({
      videos: response.data.items,
      selected_video: response.data.items[0],
    });
  };

  onSelectVideo = (video) => {
    this.setState({ selected_video: video });
  };

  render() {
    return (
      <div className="ui container">
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <SearchBar onInputSubmit={this.onInputSubmit} />
        </div>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selected_video} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onClickedVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
