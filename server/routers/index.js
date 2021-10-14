/*
  If there were more routes to keep track of this router file would
  be broken into specific endpoints, compared to an all-in-one as it is right now.
  This is purely for convenience given the limited scope of this take home assessment.
*/

const router = require("express").Router();

// users endpoint
const getUsers = require("../controllers/users");

// data endpoint
const getData = require("../controllers/data");
const formatData = require("../controllers/format");
const sendData = require("../controllers/send");

/*
    /api
*/
router.get("/users", getUsers);

router
  .get("/data/user/:user_id", getData)
  .get("/data/user/:user_id", formatData)
  .get("/data/user/:user_id", sendData);

module.exports = router;
