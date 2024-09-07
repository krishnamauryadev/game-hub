import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5539b3425cb6451caff3cdbbbe0dbf19",
  },
});
