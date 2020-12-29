import axios from "axios";

const KEY = "AIzaSyA366-yvchonJTJ7xoIJE7n-mrNl6CsbUk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
