var express = require("express");
var user = require("../controller/Cuser");
const router = express.Router();

router.get("/", user.main);

router.post("/", user.signup);

router.get("/login",user.login);
router.post("/login",user.loginCheck);

router.post("/profile", user.profile);

module.exports = router;