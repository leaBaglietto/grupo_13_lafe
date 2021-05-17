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
const productRouter=require('./routes/productRouter');
const loginRouter=require('./routes/loginRouter');

app.use('/', mainRoutes);
app.use('/users', userRouter);
app.use('/product', productRouter);
app.use('/login',loginRouter);

// Configuracion de servidor
app.listen (3030, () => {
    console.log ('-------- BIENVENIDOS A LAFE --------');
    console.log ('ferretero atendiendo en la caja 3030');
    console.log ('--- #quedateEnCasa compra onLine ---')
});

//Error 404
const error404 = require('./middlewares/notFound');
app.use(error404);


