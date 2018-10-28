const productsSchema = require('../../models/products/productsSchema');

const updateProduct = (req, res) => {
    const productId = req.params.id;
    productsSchema.findOneAndUpdate(productId, req.body, {new: true}).then(
        newProduct => {
          res.status(200);
          res.json({
            "status": "success",
            "product": newProduct
          });
        }).catch(
        err => {
          res.status(500);
          res.json({error: err})
        })
  }
  
  module.exports = updateProduct;