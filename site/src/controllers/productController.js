const fs = require('fs');
const path = require('path');
const jsonTable = require('../data/jsonTable');
const productTable = jsonTable('product');

let product = fs.readFileSync(path.join(__dirname, '../data/product.json'), 'utf-8');
users = JSON.parse(product)

module.exports = {
agregarProducto: (req, res) => {
       res.render('addProduct')
   },
productoAgregado: (req, res) => {
    let newProduct = req.body
    let productId = productTable.create(newProduct);
    let product = productTable.findByField('name_product', req.body.name_product); 
    console.log (productId)
     res.render('productDetail',{product})
}}

