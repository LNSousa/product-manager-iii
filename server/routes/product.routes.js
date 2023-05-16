const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/api/products/new', ProductController.createProduct)

    app.get('/api/products', ProductController.allProducts)

    app.get('/api/products/:id', ProductController.getProduct)

    app.put('/api/products/update/:id', ProductController.updateProduct)

    app.delete('/api/products/delete/:id', ProductController.deleteProduct)
}