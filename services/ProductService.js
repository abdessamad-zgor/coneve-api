class ProductService{

    constructor(Product) {
        this.product = Product;
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
        await this.product.set(data);
        return data;
    }

    async updateProduct(id, data) {
        let doc = this.product.doc("/"+id).update(data);
        return data;
    }

    async deleteProduct(id) {
        
    }

    async deleteProducts(idProducts) {
        let idList = {
            _id:{
                $in: idProducts
            }
        };
        await this.product.deleteMany(idList, (err, result)=>{
            if (err){
                throw err;
            }
            return result;
        })
    }
}

module.exports = ProductService;