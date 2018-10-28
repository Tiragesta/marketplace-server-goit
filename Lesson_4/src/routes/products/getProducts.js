const productsSchema = require('../../models/products/productsSchema');

const getAllProducts = (request, response) => {
    const sendResponse = (products) => {
      response.status(200);
      response.json(products);
    };
  
    productsSchema
      .find()
      .then(sendResponse)
      .catch(err => {
        console.error(err)
      });
  };
  
  module.exports = getAllProducts;