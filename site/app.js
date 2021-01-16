const express = require ('express');
const path = require ('path')

const app = express ();

app.listen (3000, () => {
    console.log ('-------- BIENVENIDOS A LAFE --------');
    console.log ('ferretero atendiendo en la caja 3000');
    console.log ('--- #quedateEnCasa compra onLine ---')
});

app.get ('/', (req, res) => {
       res.sendFile(path.join(__dirname, './src/views/index.html'));
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/register.html'));
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/productCart.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/productDetail.html'));
});

const publicPath = path.join (__dirname, './public');
app.use( express.static(publicPath));