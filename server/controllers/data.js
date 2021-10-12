const DataServer = require("../lib/DataServer");

module.exports = (req, res) => {
  const { user_id } = req.params;

  DataServer.get(`/${user_id}.json`)
    .then((userData) => {
      const { data } = userData;
      data.id = user_id;
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
};
