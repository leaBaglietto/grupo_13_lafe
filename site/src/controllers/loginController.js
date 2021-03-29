const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const jsonTable = require('../data/jsonTable');
const loginTable = jsonTable('users');
const users = {
    filePath: path.join(__dirname, '../data/users.json'),
    readFile() {
        let rows = fs.readFileSync(this.filePath, 'utf-8');
        rows = JSON.parse(users);}}

module.exports={
    userLogin:(req,res)=> {
		return res.render('userLogin');
	},
	loginProcess: (req, res) => {
		let userToLogin =loginTable.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				return res.redirect('/user/profile');
			} 
			return res.render('userLogin', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}
		return res.render('userLogin', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
    }}