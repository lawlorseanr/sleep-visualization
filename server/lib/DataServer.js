/*
  A custom instance of axios where we can specify the shared base URL for
  all data request queries. In production this could also store additional
  information like authorization keys, headers, etc.
*/

const axios = require("axios");
const baseURL = require("../config/config").userDataUrl;

const Server = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});

module.exports = Server;
