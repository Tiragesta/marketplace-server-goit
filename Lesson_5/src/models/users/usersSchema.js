const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        favoriteCategories: Array,
        products: Array, 
        viewedProducts: Array
    });

let Users = mongoose.model('Users', usersSchema);
module.exports = Users;