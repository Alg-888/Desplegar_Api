const express = require("express");
const verificacion = express.Router();
const verificarT = require("../controllers/tokenController");



verificacion.post("/validarToken", verificarT.validarT);


module.exports = verificacion;