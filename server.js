const express = require("express"); // Igual o import do react

const server = express();
server.use(express.json()); // Permite que o express entenda JSON no body das requisições
const port = 3000; // Porta que o servidor vai rodar

let productsList = [
    {
        id: 1, 
        name: "morango",
        price: 10.00,
        quantity: 2, 
    },
];

server.get("/products", (request, response) =>{
    response.json(productsList);
});

server.post("/products", (request, response) => {
    const newProduct = request.body;
    const newId = productsList.length + 1;

    newProduct.id = newId;
    productsList.push(newProduct);

    response.status(201).json(newProduct);
    });

server.get("/", (request, response) => {
    response.send("Hello World");
});

server.listen(port, () => {
    console.log("Projeto rodando na porta " + port);
});
