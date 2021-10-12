const DataServer = require("../lib/DataServer");

const USE_MOCK_DATA = true;
let MOCK_DATA;
if (USE_MOCK_DATA) {
  MOCK_DATA = require("../data");
}

module.exports = (req, res) => {
  const { user_id } = req.params;

  if (USE_MOCK_DATA) {
    res.status(200).json(MOCK_DATA[user_id]);
  } else {
    DataServer.get(`/${user_id}.json`)
      .then((userData) => {
        const { data } = userData;
        data.id = user_id;
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  }
};
