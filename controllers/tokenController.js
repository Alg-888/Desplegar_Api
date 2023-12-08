const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const logincontroller = require('./loginController');

function validarT(req, res, next) {
  const Token = req.body.token;
  const tokenUsuario = req.body.tokenUsuario;

  console.log(Token);

  console.log(tokenUsuario);

  if (Token === tokenUsuario) {
    res.redirect('/beneficiarios');
  } else {
    res.redirect('/');
  }
}

module.exports = {
    validarT
};
