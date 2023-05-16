const Product = require('../models/product.model')

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => res.json({results: newProduct}))
    .catch((err) => res.json(err))
}

module.exports.allProducts = (req, res) => {
    Product.find()
    .then((products) => res.json({results: products}))
    .catch((err) => res.json(err))
}

module.exports.getProduct = (req, res) => {
    Product.find({_id: req.params.id})
    .then((product) => res.json({results: product}))
    .catch((err) => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((updatedProduct) => res.json({results: updatedProduct}))
    .catch((err) => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then((deletedProduct) => res.json({results: deletedProduct}))
    .catch((err) => res.json(err))
}