const categoriesSchema = require('../../models/categories/categoriesSchema');

const createCategory = (req, res) => {
  const category = new categoriesSchema(req.body);
  category.save().then(category => {
    res.status(201);
    res.json(category);
  }).catch(
      err => {
        res.status(500);
        res.json({error: err})
      })
}


module.exports = createCategory;