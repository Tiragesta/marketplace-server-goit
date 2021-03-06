const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productsSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        currency: {
            type: String,
            required: true
        },
        categories: {
            type: [String, String],
            required: true
        },
        raiting: Number, 
        likes: Number, 
        forSale: Boolean, 
        buyer: String, 
        seller: String
    });

let Products = mongoose.model('Products', productsSchema);
module.exports = Products;