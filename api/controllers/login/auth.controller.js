
const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');
const getToken = require('../../until');

class LoginController{

    // [POST] /auth/login
    async login(req, res, next) {
        const signinUser = await User.findOne({
            username: req.body.username,
            password: req.body.password,
          });
          if (signinUser) {
            res.send({
              _id: signinUser._id,
              username: signinUser.username,
              isAdmin: signinUser.isAdmin,
              token: getToken(signinUser),
            });
          } else {
            res.status(401).send({ message: 'Invalid Email or Password.' });
          }
    }
}

module.exports = new LoginController;
