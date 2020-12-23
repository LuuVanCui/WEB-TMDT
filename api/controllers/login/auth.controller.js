
const User = require('../../models/user.model');
const { getToken } = require('../../utils');

class LoginController {

  // [POST] api/auth/login
  async login(req, res, next) {

    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (user) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: getToken(user),
      });
      return;
    }
    else {
      res.status(401).send({ message: 'Email hoặc mật khẩu không chính xác!' });
    }
  }
}

module.exports = new LoginController;
