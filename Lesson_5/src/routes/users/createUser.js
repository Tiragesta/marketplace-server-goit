const User = require('../../models/users/usersSchema');

const createUser = (request, response) => {
  const user = new User(request.body);
  user.save().then(newUser => {
    response.status(201);
    response.json(newUser);
  }).catch(
      err => {
        response.status(500);
        response.json({error: err})
      })
}

module.exports = createUser;
