const userSchema = {
    firstName: 'string|required',
    lastName: 'string|required',
    phone: 'string|required',
    email: 'email',
    country: 'string',
    city: 'string',
    address: 'address',
    facebookUsername: 'string'
};

const productSchema = {
    name: 'string',
    priceSize: 'array|required',
    'priceSize.*.size': 'string',
    'priceSize.*.price': 'numeric',
    ingredients: 'array',
    'ingredients.*': 'string',
    imageURL: 'url'
};

const orderSchema = {
    userID: 'alpha_num|required',
    items: 'array',
    'items.*': 'alpha_num',
    total: 'numeric'
};

module.exports.userSchema = userSchema;
module.exports.productSchema = productSchema;
module.exports.orderSchema = orderSchema;