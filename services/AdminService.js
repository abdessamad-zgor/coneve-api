const db = require('./../data');
class AdminService{
    constructor(){
        this.Admin = db.ref('/admin');
    }
}