const express= require("express");
const router=express.Router();

const usersController= require("../controllers/usersController");

//llamamos al formulario de registro
router.get('/create', usersController.userCreate);

//procesar el registro
router.post('/create',usersController.processCreate);

//router.get('/profile/:id',usersController.view)//
module.exports=router;
