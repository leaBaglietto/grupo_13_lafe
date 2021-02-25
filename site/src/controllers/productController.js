const fs = require('fs');
const path = require('path');

let users = fs.readFileSync(path.join(__dirname, '../data/product.json'), 'utf-8');
users = JSON.parse(users)

module.exports = {
agregarProducto: (req, res) => {
       res.render('addProduct')
   },
productoAgregado: (req, res) => {
       res.send(req.body)
    }

};