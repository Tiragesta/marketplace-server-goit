const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categoriesSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
);

let Categories = mongoose.model('Categories', categoriesSchema);
module.exports = Categories;