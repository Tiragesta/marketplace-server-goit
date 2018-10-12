const productsBase = require('./productsBase');

const getProductById = (request, response) => {
    const routeData = request.url.split('/').slice(1);
    const id = routeData[1];
    const product = productsBase().find(el => el.id === +id);
    
    
    if (product) {
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        response.write(JSON.stringify(product));
        response.end();
    } else {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.write(JSON.stringify('Base has not product with id: '+ id));
        response.end();
    }
    
};
module.exports = getProductById;