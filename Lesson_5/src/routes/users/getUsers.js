const usersSchema = require('../../models/users/usersSchema');

const getAllUser = (request, response) => {
    const sendResponse = (user) => {
      response.status(200);
      response.json(user);
    };
  
    usersSchema
      .find()
      .then(sendResponse)
      .catch(err => {
        console.error(err)
      });
  };
  
  module.exports = getAllUser;
