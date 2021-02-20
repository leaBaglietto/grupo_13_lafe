const fs = require('fs');
const path = require('path');

let users = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
users = JSON.parse(users)

//const jsonTable={
//userCreate(row) {
// let rows = this.readFile();
// row.id = this.nextId();
//rows.push(row);
//this.writeFile(rows);
//return row.id;}
module.exports = {
    userCreate: (req, res) => {
        res.render('userCreate')
    },
    processCreate: (req, res) => {
        res.send(req.body)
    }

};



