let productsList = [
    {
        id: 1, 
        name: "morango",
        price: 10.00,
        quantity: 2, 
    },
];

class ProductRepository{
    findAll(){
        return productsList
    }

    findById(id)
    {
        return productsList.find((product) => product.id === Number(id));
    }

    findByName(name) {
        const product = productsList.find(
            product => product.name.toLowerCase() === name.toLowerCase
        );
        return product;
    }

    /**
     *  Cadastra um produto no banco de dados, criando um novo ID unico
     * 
     * @param newProduct Os dados do novo produto, incluindo nome, preço e quantidade em estoque
     *
     * 
     * @returns O novo produto cadastrado, incluindo seu ID unico 
     * 
     */

    create(newProduct) {
        const newId = productsList.length + 1

        newProduct.id = newId
        productsList.push(newProduct)
        console.log(newProduct)

        // console.log(productsList)
        return newProduct
    }

    delete(id)
    {
        const productIndex = productsList.findIndex(
            (product) => product.id === Number(id)
        );

        if (productIndex === -1) 
        {
         return false;
        }

        productsList.splice(productIndex, 1);
    }


}

module.exports = new ProductRepository();