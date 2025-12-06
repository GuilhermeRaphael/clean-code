
class ProductFirebaseRepository {
    constructor(db) {
        this.db = db;
    }

    async create(product) {
        const newProduct = await this.db.add({
            name: product.name,
            price: product.price,
            quantity: product.quantity,
        });

        return { Id: newProduct.id, ...product };
    }

    async findByName(name) {
        const product = await this.db.where("name", "==", name).get();

        if (product.empty) {
            return null
        }

        return product.docs[0].data();
    }
}
module.exports = ProductFirebaseRepository;