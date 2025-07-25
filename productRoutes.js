const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post(
    '/',
    body('name').isString().notEmpty(),
    body('category').isString().notEmpty(),
    body('price').isFloat({ gt: 0 }),
    productController.createProduct
);

module.exports = router;
