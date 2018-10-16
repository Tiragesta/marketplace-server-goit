const fs = require('fs');
const path = require('path');

const productsFolder = path.resolve(__dirname, '../../', 'data/products');

const saveNewProduct = (fileName, data, cb) => {
  const src = path.resolve(productsFolder, fileName + '.json');
  fs.writeFile(src, JSON.stringify(data), cb);
  debugger
};
const createProduct = (req, res) => {
  let body = [];
  const handleDataLoad = () => {
      const data = Buffer.concat(body).toString();
      
      const newProduct = Object.assign({}, { id: Date.now() }, JSON.parse(data));
     // const productData = [...products()].concat([newProduct]);
      
      const fileName = newProduct.name.toLowerCase() + newProduct.id;

      saveNewProduct(fileName, newProduct, () => {
          res.writeHead(200, {"Content-Type": "application/json"});
          res.write(JSON.stringify({
            "status": "success",
            product: {
                "name": newProduct.name,
                "description": newProduct.description,
                "price": newProduct.price,
                "currency": newProduct.currency,
                "categories": newProduct.categories,
            }
          }));
          res.end();
      });
  };
  req
      .on('data', (chunk) => {
          body.push(chunk);
      })
      .on('end', handleDataLoad);
};
module.exports = createProduct;
