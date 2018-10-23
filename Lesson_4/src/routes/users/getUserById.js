const usersSchema = require('../../models/users/usersSchema');

const getUserById = (request, response) => {
    const id = request.params.id;
    const sendResponse = ([user, product]) => {
      response.status(200);
      response.json(user);
    };
  
    const findUser = usersSchema.findById(id);
    const findProduct = Product.findById(id);
  
    Promise.all([findUser, findProduct])
      .then(sendResponse)
      .catch(err => {
        console.error(err)
      });
  };
  
  module.exports = getUserById;