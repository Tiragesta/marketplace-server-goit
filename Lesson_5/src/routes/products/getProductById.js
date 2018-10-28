const productsSchema = require('../../models/products/productsSchema');

const getProductById = (req, res) => {
    productsSchema.findById(req.params.id).then(product => {
      if (product) {
        res.json({
          status: "success",
          product
        });
      }
      else {
        res.status(404);
        res.json(
            {message: `Requested entity ${req.params.id} was not found`});
      }
    }).catch(err => {
      res.status(500);
      res.json({error: err})
    });
  
  };
  
  module.exports = getProductById;