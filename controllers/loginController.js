const jwt = require('jsonwebtoken');
const keys = require("../settings/keys");

const app = require('express')();
app.set("key", keys.key);

module.exports.login = async (req, res) => {
    const userAdmin = 'admin';
    const passAdmin=123; 
    const { username, password } = req.body;

    if (username == userAdmin && password == passAdmin) {
        // Credenciales correctas, genera el token y renderiza la vista
        const payload = { check: true };
        const token = jwt.sign(payload, app.get("key"), { expiresIn: "1h" });
        res.render('token', { token: token });
    } else {
        res.redirect('/')
    }

//   // Verifica las credenciales del usuario
//   Usuario.findOne({ username })
//     .then(Usuario => {
//       if (!Usuario) {
//         req.flash('error', 'Usuario no encontrado');
//         res.redirect("/login");
//       } else {
//         Usuario.isCorrectPassword(password, (err, result) => {
//           if (err) {
//             req.flash('error', 'Error de autenticación');
//             res.redirect("/login");
//           } else if (result) { 
//             // Credenciales correctas, genera el token y renderiza la vista
//             const payload = { check: true };
//             const token = jwt.sign(payload, app.get("key"), { expiresIn: "7d" });
//             res.render('index', { token: token });
//           } else {
//             req.flash('error', 'Contraseña incorrecta');
//             res.redirect("/login");
//           }
//         });
//       }
//     })
//     .catch(err => {
//       req.flash('error', 'Error interno del servidor');
//       res.redirect("/login");
//     });
};
