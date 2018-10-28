const categoriesSchema = require('../../models/categories/categoriesSchema');

const getCategoryById = (req, res) => {
    categoriesSchema.findById(req.params.id).then(category => {
      if (category) {
        res.json(category)
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
  
  module.exports = getCategoryById;