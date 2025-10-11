const productService = require("../services/product.service");

class ProductController{
    list(request, response){
        const products = productService.listAll();
        response.json(products);
    }

    create(request,response){
        const newProduct = productService.create(request.body);

        response.status(201).json(newProduct);
    }
}

module.exports = new ProductController();