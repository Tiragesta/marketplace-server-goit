const productsBase = require('./productsBase');

const getProducts = (request, response) => {
const products = productsBase();
    if(products){
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify(products));
        response.end();
    } else {
        response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        response.write('Server error');
        response.end();
    }
    
};
module.exports = getProducts;