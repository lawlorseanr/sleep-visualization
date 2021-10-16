const DataServer = require("../lib/DataServer");

const USE_MOCK_DATA = true;
let MOCK_DATA;
if (USE_MOCK_DATA) {
  MOCK_DATA = require("../data");
}

module.exports = (req, res, next) => {
  const { user_id } = req.params;
  if (USE_MOCK_DATA) {
    res.rawData = MOCK_DATA[user_id];
    next();
  } else {
    DataServer.get(`/${user_id}.json`)
      .then((userData) => {
        const { data } = userData;
        data.id = user_id;
        res.rawData = data;
        next();
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
};
