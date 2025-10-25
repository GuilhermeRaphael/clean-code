const productService = require("../services/product.service");

class ProductController{
    list(request, response){
        const products = productService.listAll();
        response.json(products);
    }

    create(request,response){
          try{
            const newProduct = productService.create(request.body);

            response.status(201).json(newProduct);

        } catch(error) {
            const errorMessage = {
                error: error.message,
            }
            

        }
        response.status(400).json
    }

    delete(request,response)
    {
        try
        {
            const productId = request.params.id;    
            productService.delete(productId);
            
            response.status(200).json({ message: "Produto removido com sucesso" });
        }
        catch(error)
        {
            const errorMessage = {
                error: error.message,
            };
            response.status(400).json(errorMessage);
        }
    }
}

module.exports = new ProductController();