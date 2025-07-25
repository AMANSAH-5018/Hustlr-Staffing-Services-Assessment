const { validationResult } = require('express-validator');
const Product = require('../models/productModel');

exports.getProducts = (req, res) => {
    const { category } = req.query;
    if (category) {
        const filtered = Product.getProductsByCategory(category);
        return res.json(filtered);
    }
    res.json(Product.getAllProducts());
};

exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = Product.getProductById(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
};

exports.createProduct = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const newProduct = Product.addProduct(req.body);
    res.status(201).json(newProduct);
};
