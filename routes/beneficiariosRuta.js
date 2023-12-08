var express     = require("express"); 
var request     = require("request");
const router = express.Router();


// Crear Beneficiarios 
router.post('/crearBeneficiario', function(req, res) {
const { nombre, telefono, numero_familiares, documento} = req.body;
var url1= "https://api-ums.onrender.com/api/beneficiarios"
request.post({
    "headers": { "content-type": "application/json" },
    "url": url1,
    "body": JSON.stringify({
        nombre,
        telefono,
        numero_familiares,
        documento
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log(JSON.parse(body));

    res.redirect('/beneficiarios')
});
})

// Consultar  Beneficiarios 
router.get('/beneficiarios', function(req, res) {
    var url2= "https://api-ums.onrender.com/api/beneficiarios"
    request.get({
        "headers": { "content-type": "application/json" },
        "url": url2,
        "body": JSON.stringify({ url2
        })
    }, (error, response, body) => {
        if(error) {
            return res.status(500).send('Error al obtener datos de la API');

        }
        const beneficiarios = JSON.parse(body);
        res.render('beneficiarios',{beneficiarios})

    });
})

// Actualizar Beneficiarios 
router.post('/editarBeneficiario', function(req, res) {
    const { id_editar,nombre_editar, telefono_editar,numF_editar, documento_editar} = req.body;
    var url3= `https://api-ums.onrender.com/api/beneficiarios/${id_editar}`
    request.put({
        "headers": { "content-type": "application/json" },
        "url": url3,
        "body": JSON.stringify({
        "nombre":nombre_editar ,
        "telefono": telefono_editar,
        "numero_familiares": numF_editar,
        "documento": documento_editar,
        })
    }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        console.log('Registro Actualizado con exito')
        
        res.redirect('/beneficiarios')
    });
    })
 // Eliminar Beneficiarios 
 router.get('/eliminarBeneficiario/:id', function(req, res) {
    const beneficiarioId = req.params.id;
    var url4= `https://api-ums.onrender.com/api/beneficiarios/${beneficiarioId}`
    request.delete({
        "headers": { "content-type": "application/json" },
        "url": url4
       
    }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        console.log('Registro Eliminado con exito')
        res.redirect('/beneficiarios')
    });
    })
module.exports = router;