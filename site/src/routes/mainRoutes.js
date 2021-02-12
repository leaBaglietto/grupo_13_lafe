const express = require('express');
const router = express.Router();

const mainController = require ('../controllers/mainController');

router.get ('/',mainController.index);

router.get ('/register',mainController.register);

router.get ('/productCart',mainController.productCart);

router.get ('/productDetail',mainController.productDetail);

router.get ('/userCreate',mainController.userCreate);

router.get ('/userLogin',mainController.userLogin);

module.exports = router;