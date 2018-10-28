const productsSchema = require('../../models/products/productsSchema');

const createProduct = (req, res) => {
  const product = new productsSchema(req.body);
  product.save().then(newProduct => {
    res.status(201);
    res.json(newProduct);
  }).catch(
      err => {
        res.status(500);
        res.json({error: err})
      })
}

module.exports = createProduct;
