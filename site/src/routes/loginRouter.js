const express= require("express");
const router=express.Router();

const loginController= require("../controllers/loginController");

//llamamos al formulario de registro
router.get('/login', loginController.userLogin);

//procesar el registro
router.post('/login',loginController.loginProcess);
module.exports=router;