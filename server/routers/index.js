/*
  If there were more routes to keep track of this router file would
  be broken into specific endpoints, compared to an all-in-one as it is right now.
  This is purely for convenience given the limited scope of this take home assessment.
*/

const router = require("express").Router();
const userController = require("../controllers/users");
const dataController = require("../controllers/data");

/*
    /api
*/
router.get("/users", userController);
router.get("/data/user/:user_id", dataController);

module.exports = router;
