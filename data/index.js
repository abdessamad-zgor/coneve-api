const app = require('./app');
const db = app.firestore();
const schemas = require('./schemas');
const idGenerator = require('uniqid');
const validator = require('validatorjs');

const producModel = db.collection('/Products');
const orderModel = db.collection('/Orders');
const userModel = db.collection('/Users');
const adminModel = db.collection('/Admins');


