import axios from "axios";
import config from "../config/config";

export default axios.create({
  baseURL: `http://${config.host}:${config.port}`,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});
