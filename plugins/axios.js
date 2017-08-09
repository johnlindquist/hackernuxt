import axios from "axios"

export default axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/"
})
