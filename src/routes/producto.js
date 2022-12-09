const productController = require('../../controllers/productController');

const router = require('express').Router();

router.get('/lista', productController.listado)

module.exports = router;
