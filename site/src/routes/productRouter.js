const express= require("express");
const productController = require("../controllers/productController");
const router=express.Router();

const usersController= require("../controllers/productController");

router.get('/create', productController.agregarProducto);

router.post('/create',productController.productoAgregado);


module.exports=router;