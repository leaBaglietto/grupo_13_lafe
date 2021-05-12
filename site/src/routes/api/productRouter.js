const express = require('express');
const router = express.Router();
const apiController = require('../../controllers/api/usersController');

router.get('/show', apiController.showALL);
router.get('/users/detail/:id', apiController.detail);
router.get('/users/search', apiController.search);

module.exports = router;