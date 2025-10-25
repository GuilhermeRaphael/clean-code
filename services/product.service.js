const productRepository = require("../repositories/product.repository");

class ProductServices{
    listAll(){
        return productRepository.findAll()
    }

    create (newProduct){
        const existingProduct = productRepository.findByName(newProduct.name);

        if(existingProduct){
            throw new Error("Produto ja Cadastrado")
        }

        const productEntity = new Product(newProduct);

        return productRepository.create(productEntity);
    }
    delete(id)
    {
        const existingProduct = productRepository.findById(id);

        if(!existingProduct){
            throw new Error("Produto não existe");
        }

        productRepository.delete(id);
        
        return;
    }
}

module.exports = new ProductServices();