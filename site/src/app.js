const express = require ('express');
const path = require ('path');
const mainRoutes = require ('../src/routes/mainRoutes')
const app = express ();

// Configuracion de servidor
app.listen (3000, () => {
    console.log ('-------- BIENVENIDOS A LAFE --------');
    console.log ('ferretero atendiendo en la caja 3000');
    console.log ('--- #quedateEnCasa compra onLine ---')
});

// --- Configuracion ---
// LLAMAMOS A EJS PARA QUE SEA NUESTRO TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.use ('/', mainRoutes);

app.set ('views', '../src/views')

const publicPath = path.join (__dirname, '../public');
app.use( express.static(publicPath));



