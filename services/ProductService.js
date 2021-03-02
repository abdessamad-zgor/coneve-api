class ProductService{

    constructor(Product, idGenerator) {
        this.product = Product;
        this.idGenerator = idGenerator;
    }

    async listAllProducts() {
        let products = await this.product.get();
        return products;
    }

    async listOneProduct(id) {
        let product = await this.product.doc("/"+id).get();
        return product;
    }

    async createProduct(data) {
        await this.product.doc(idGenerator()).set(data);
        return data;
    }

    async updateProduct(id, data) {
        await this.product.doc("/"+id).update(data);
        return data;
    }

    async deleteProduct(id) {
        await this.product.doc('/'+id).remove();
        return true
    }
}

module.exports = ProductService;