const express = require('express');
const path = require('path');
const app = express();
const methodOverride=require('method-override');
// --- Configuracion ---
// LLAMAMOS A EJS PARA QUE SEA NUESTRO TEMPLATE ENGINE
app.use(express.static('../public'));
app.set('view engine', 'ejs');
app.set('views', './views');

//Formularios
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'));
//Rutas
const mainRoutes=require('./routes/mainRoutes');
const userRouter=require('./routes/userRouter');

app.use('/', mainRoutes);
app.use('/users', userRouter);


// Configuracion de servidor
app.listen (3000, () => {
    console.log ('-------- BIENVENIDOS A LAFE --------');
    console.log ('ferretero atendiendo en la caja 3000');
    console.log ('--- #quedateEnCasa compra onLine ---')
});


