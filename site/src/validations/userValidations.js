const path = require('path');
const {body} = require('express-validator');

module.exports = {
    login : [
        body('email').notEmpty().withMessage('el mail es obligatorio').bail().isEmail().withMessage("iene que ser un correo posta"),
        body('password').notEmpty().withMessage('Me parece que te equivocaste').isLength({ min: 5})
    ],
    register : [
        body('first_name').notEmpty().withMessage('Aca no hay nada... Metele un nombre'),
        body('last_name').notEmpty().withMessage('Su apellido esta vacio... '),
        body('email').notEmpty().withMessage('el mail es obligatorio').bail().isEmail().withMessage("tiene que ser un correo posta"),
        body('password').notEmpty().withMessage('Tu contraseña tiene que tener como minimo 5 caracteres').isLength({ min: 5}),
        body('image').custom((value, {req})=>{
            let file = req.file;//gracias a multer viaja la info del form por un lado y la imagen por otro (file=imagen)
            let acceptedExtensions = ['.png', '.jpg', '.jpeg'];//extensiones permitidas
            if(file && file.originalname){
                let extension = path.extname(file.originalname).toLowerCase();
                if (!acceptedExtensions.includes(extension)){
                    throw new Error ('Debe ser una imagen valida del tipo "png, jpg, jpeg"');
                };            
            }
            return true;
            //no es obligacion de que suba una imagen
        })
    ],
    
}