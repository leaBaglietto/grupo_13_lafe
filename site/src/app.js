const express = require ('express');
const path = require ('path');


const usersRoutes = require ('./routes/userRoutes')

const app = express ();

app.listen (3000, () => {
    console.log ('-------- BIENVENIDOS A LAFE --------');
    console.log ('ferretero atendiendo en la caja 3000');
    console.log ('--- #quedateEnCasa compra onLine ---')
});

app.get ('/', (req, res) => {
       res.sendFile(path.join(__dirname, './views/index.html'));
})
/*
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/register.html'));
}); */ 

app.use ('/user',usersRoutes)

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

const publicPath = path.join (__dirname, './public');
app.use( express.static(publicPath));

// Instalacion de EJS //  
app.set('view engine', 'ejs')
app.set('views', './views')

