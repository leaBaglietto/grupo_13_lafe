const express= require("express");
const productController = require("../controllers/productController");
const router=express.Router();

const usersController= require("../controllers/productController");
//llamamos al formulario de producto
router.get('/create', productController.agregarProducto);

//procesar el formulario de producto
router.post('/create',productController.productoAgregado);


module.exports=router;