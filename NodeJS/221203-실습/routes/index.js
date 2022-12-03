var express = require("express");
var controller = require("../controller/Csignin");
const router = express.Router();

router.get("/", controller.signup);
router.post("/register", controller.register);
router.post("/login", controller.login);

module.exports = router;
