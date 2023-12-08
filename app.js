const express = require('express')
const port=3005;
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/beneficiariosRuta');
const userR = require('./routes/beneficiariosRuta');
const token = require ('./routes/tokenRuta')
const loginR = require('./routes/loginRuta')

const keys = require('./settings/keys')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("key",keys.key)

app.use(loginR);
app.use(userR);
app.use(token);


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))


app.get('/',(req,res)=>{
    res.redirect('/login')
})

app.get('/login',(req,res)=>{
    res.render('login')
})


app.get('/beneficiarios',(req,res)=>{
    res.redirect('beneficiarios')
})

app.get('/beneficiarios',(req,res)=>{
    res.render('beneficiarios')
})

app.get("/token", (req, res) => {
    res.render("token");
  });


router.get('/crearBeneficiario',(req,res)=>{
    res.redirect('crearBeneficiario')
})

app.listen(port,()=>{
    console.log("Escuchando", port)
});

