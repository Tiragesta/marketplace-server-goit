const categorySchema = require('../../models/categories/categoriesSchema');

const updateCategory = (req, res) => {
    const categoryId = req.params.id;
    categorySchema.findOneAndUpdate(categoryId, req.body, {new: true}).then(
        newCategory => {
          res.status(200);
          res.json(newCategory);
        }).catch(
        err => {
          res.status(500);
          res.json({error: err})
        })
  }
  
  module.exports = updateCategory;