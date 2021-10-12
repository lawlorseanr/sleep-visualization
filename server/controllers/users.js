const users = require("../config/config").userList;

module.exports = (req, res) => {
  res.status(200).json(users);
};
