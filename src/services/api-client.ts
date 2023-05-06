import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '05b98e5ec10e4dbb98cd0ea14c408272',
  },
});