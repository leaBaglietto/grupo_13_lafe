const fs = require('fs');
const path = require('path');


module.exports = {
    userLogin: (req, res) => {
        res.render('userLogin')
    },
    loginDone: (req, res) => {
        res.send(req.body)
        /*     loginDone: (req, res) => {
                let user = jsonTable.findById(req.params.id);
                if ( user ) {
                    res.render('users/detail', { user });
                } else {
                    res.send('No encontré el usuario');
                } */

    }


}; 

/* processCreate: (req, res) => {
    let newUser = req.body
    delete newUser.repassword
    // newUser.password = hashear contraseña //
    // Cuando tengamos imagenes //
    let userId = usersTable.create(newUser);
    console.log (userId)
    /* res.redirect('/') */
    /* res.send('usuario creado' + userId) */




