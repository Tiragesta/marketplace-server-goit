const usersSchema = require('../../models/users/usersSchema');

const getUserById = (req, res) => {

    usersSchema.findById(req.params.id).then(user => {
      if (user) {
        res.json({
          status: "success",
          user
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
  
  module.exports = getUserById;