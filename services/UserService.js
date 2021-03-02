class UserService {
    constructor (User, orderService, productService, authProvider, idGenerator){
        this.User = User;
        this.orderService = orderService;
        this.productService = productService;
        this.authProvider = authProvider;
        this.idGenerator = idGenerator
    }
    async placeOrder(cart, formInfo){
        this.orderService.doc(idGenerator()).create(cart);
        return cart;
    }
    async seeProducts(){
        let products = this.productService.listAllProducts();
        return products;
    }
    async signUp(){

    }
    async signInWithFacebock(){

    }
    async signInWithGoogle() {

    }
    async seeProduct(){

    }
    async leaveReview(){

    }
    async signOut(){

    }
    async createProfile(){
        
    }
}