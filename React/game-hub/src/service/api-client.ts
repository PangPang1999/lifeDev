import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a841d5a4ef7b426f9432d3ffd1989b69",
  },
});
