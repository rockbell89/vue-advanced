import axios from "axios";

// HTTP Request & Response settings
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
}

// API Fuction
function fecthNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`)
}

export {
  fecthNewsList
}