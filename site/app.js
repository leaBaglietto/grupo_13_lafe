const express = require ('express');
const path = require ('path');

const mainRoutes = require ('./src/routes/mainRoutes')
// const usersRoutes = require ('./src/routes/mainRoutes')

const app = express ();

app.listen (3000, () => {
    console.log ('-------- BIENVENIDOS A LAFE --------');
    console.log ('ferretero atendiendo en la caja 3000');
    console.log ('--- #quedateEnCasa compra onLine ---')
});

// LLAMAMOS A EJS PARA QUE SEA NUESTRO TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.use ('/', mainRoutes);

app.set ('views', 'src/views')

 /*
app.get ('/', (req, res) => {
       res.sendFile(path.join(__dirname, './views/index.html'));
})
/*
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/register.html'));
}); */ 

//Ruteador //

/*
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
}); */

const publicPath = path.join (__dirname, './public');
app.use( express.static(publicPath));



