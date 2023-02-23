import axios from "axios";
const KEY = "AIzaSyDZxp0aL-ZIPd3AnD_62NUvwSlbGpx8cnw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 6,
    key: KEY,
  },
});
