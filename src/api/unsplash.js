import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b146aacebc8fd4e9b9ca41992168abe352f840950d085161cb489ae4bd5ca4c3"
  }
});
