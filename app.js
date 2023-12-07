const express = require('express')
const port=3005;
const app = express();
const bodyParser = require('body-parser');

const userRoute = require('./routes/beneficiariosRuta');
const router = require('./routes/beneficiariosRuta');



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(userRoute);
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

router.get('/crearBeneficiario',(req,res)=>{
    res.redirect('crearBeneficiario')
})

app.listen(port,()=>{
    console.log("Escuchando", port)
});

