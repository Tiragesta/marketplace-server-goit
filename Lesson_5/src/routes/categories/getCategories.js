const categoriesSchema = require('../../models/categories/categoriesSchema');

const getAllCategories = (req, res) => {
    const sendRes = (categories) => {
      res.status(200);
      res.json(categories);
    };
  
    categoriesSchema
      .find()
      .then(sendRes)
      .catch(err => {
        console.error(err)
      });
  };
  
  module.exports = getAllCategories;