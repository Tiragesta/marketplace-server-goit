const path = require('path');
const fs = require('fs');
const products = () => {
    const basePath = path.join(__dirname, '../products/all-products.json');
    return JSON.parse(fs.readFileSync(basePath, 'utf8'));
};
module.exports = products;