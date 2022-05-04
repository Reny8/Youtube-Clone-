import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayVideos from "../../components/DisplayVideos/DisplayVideos";
import { KEY } from "../../localKey";
// import { Link } from "react-router-dom";
const VideoPage = (props) => {
  const [videos, setVideos] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=cats&type=video&key=${KEY}&part=snippet&maxLength=5`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
      <DisplayVideos id= {id} setId={setId}videos={videos} />
  );
};

export default VideoPage;
