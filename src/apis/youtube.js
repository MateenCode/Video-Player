import axios from "axios";

const KEY = "AIzaSyBaZtRYp2D92Nus8by25Bf1b3C0T_JZ6SQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
  },
});
