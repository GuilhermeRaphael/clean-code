const express = require("express"); // Igual o import do react
const productController = require("./controllers/product.controller");

const server = express();
server.use(express.json()); // Permite que o express entenda JSON no body das requisições
const port = 3000; // Porta que o servidor vai rodar



server.get("/products", productController.list);
server.post("/products", productController.create); 
server.delete("/products/:id", productController.delete);
   
server.get("/", (request, response) => {
    response.send("Hello World");
});

server.listen(port, () => {
    console.log("Projeto rodando na porta " + port);
});
