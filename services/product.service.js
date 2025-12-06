const Product = require("../entities/product.entity");
const ProductExistsError = require("../errors/ProductExistsError");

class ProductService {
  constructor(repository) {
    this.productRepository = repository;
  }

  listAll() {
    return this.productRepository.findAll();
  }

  async create(newProduct) {
    const existingProduct = await this.productRepository.findByName(newProduct.name);

    if (existingProduct) {
      throw new ProductExistsError();
    }

    const productEntity = new Product(newProduct);

    return this.productRepository.create(productEntity);
  }

  delete(id) {
    this.findById(id);

    this.productRepository.delete(id);

    return;
  }

  findById(id) {
    const existingProduct = this.productRepository.findById(id);

    if (!existingProduct) {
      throw new Error("Produto não existe");
    }

    return existingProduct;
  }

  update(id, values) {
    const existingProduct = this.findById(id);

    if (values.name && values.name !== existingProduct.name) {
      const conflict = this.productRepository.findByName(values.name);
      if (conflict) {
        throw new ProductExistsError();
      }
    }
    const updatedProduct = this.productRepository.update(id, values);

    return updatedProduct;
  }
}

module.exports = ProductService;
