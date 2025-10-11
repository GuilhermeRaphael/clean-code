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
}

module.exports = new ProductRepository();