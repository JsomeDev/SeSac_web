var express = require("express");
var controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.visitor);
//localhost:8000/visitor
router.post("/register", controller.register);
//localhost:8000/visitor/register
router.delete("/delete", controller.delete);
//localhost:8000/visitor/delete

module.exports = router;
