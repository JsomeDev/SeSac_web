var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);

router.post("/form", controller.form);

module.exports = router;
