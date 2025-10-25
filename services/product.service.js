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
        this.findById(id);
        
    }

    findById(id){
        const existingProduct = productRepository.findById(id);

          if(!existingProduct){
            throw new Error("Produto não existe");
        }

        return existingProduct;
    }
}

module.exports = new ProductServices();