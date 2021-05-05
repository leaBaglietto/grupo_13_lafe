const fs = require('fs');
const path = require('path');
const jsonTable = require('../data/jsonTable');
const usersTable = jsonTable('users');

let users = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
users = JSON.parse(users)


module.exports = {
    userCreate: (req, res) => {
        res.render('userCreate')
    },
    processCreate: (req, res) => {
        let newUser = req.body
        delete newUser.repassword
        // newUser.password = hashear contraseña //
        // Cuando tengamos imagenes //
        let userId = usersTable.create(newUser);
        let user = usersTable.findByField('email', req.body.email); 
        console.log (userId)
       /*  let user={"first_name":'Pedro', "email":'pedro@lean.com'} */
         res.render('Profile',{user})
        /*res.send('usuario creado' + userId)*/
    }
    //view:(req,res)=>{
        //'El view muestra la info del usuario. Lo de abajo es a modo de ejemplo'
      //res.redirect('/profile/5')
   // }//

};



