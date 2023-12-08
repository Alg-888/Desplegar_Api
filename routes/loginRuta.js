const express = require("express");
const router = express.Router();
const validar = require("../controllers/loginController");

router.post("/loginV", validar.login);

module.exports = router;