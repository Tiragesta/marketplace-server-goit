const path = require('path');
const fs = require('fs');

const productsBase = () => {
    const dataBase = path.resolve(__dirname, '../../', './data/products/all-products.json');
    return JSON.parse(fs.readFileSync(dataBase, 'utf8'));
};

module.exports = productsBase;