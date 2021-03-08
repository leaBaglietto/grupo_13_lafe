const fs = require('fs');
const path = require('path');

// let users = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
// users = JSON.parse(users) //

//const jsonTable={
//userCreate(row) {
// let rows = this.readFile();
// row.id = this.nextId();
//rows.push(row);
//this.writeFile(rows);
//return row.id;}
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



