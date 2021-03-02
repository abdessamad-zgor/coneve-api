class OrderService{

    constructor(Order, idGenerator) {
        this.order = Order;
        this.idGenerator = idGenerator;
    }

    async listAllOrders() {
        let products = await this.order.get();
        return products;
    }

    async listOneOrder(id) {
        let product = await this.order.doc("/"+id).get();
        return product;
    }

    async createOrder(data) {
        await this.order.doc(idGenerator()).set(data);
        return data;
    }

    async updateOrder(id, data) {
        await this.order.doc('/'+id).update(data);
        return data;
    }

    async deleteOrder(id) {
        await this.order.doc('/'+id).remove();
        return true
    }
}