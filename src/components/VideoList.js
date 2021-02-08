import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const video_list = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoClick={props.onClickedVideo}
      />
    );
  });

  return <div className="ui relaxed divided list">{video_list}</div>;
};

export default VideoList;
