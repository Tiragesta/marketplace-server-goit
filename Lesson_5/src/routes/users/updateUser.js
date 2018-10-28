const User = require('../../models/users/usersSchema')

const updateUser = (req, res) => {
  const userId = req.params.id;
  User.findOneAndUpdate(userId, req.body, {new: true}).then(
      newUser => {
        res.status(200);
        res.json({
          status: "success",
          newUser
        });
      }).catch(
      err => {
        res.status(500);
        res.json({error: err})
      })
}

module.exports = updateUser;