const express= require("express");
const router=express.Router();

const loginController= require("../controllers/loginController");

//llamamos al formulario de registro
router.get('/enter', loginController.userLogin);

//procesar el registro
router.post('/enter',loginController.loginProcess);
module.exports=router;