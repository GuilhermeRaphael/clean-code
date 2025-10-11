const productRepository = require("../repositories/product.repository");

class ProductServices{
    listAll(){
        return productRepository.findAll()
    }

    create (newProduct){
        return productRepository.create(newProduct);
    }
}

module.exports = new ProductServices();