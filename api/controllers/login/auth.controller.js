
const User = require('../../models/user.model');
const getToken = require('../../utils');

class LoginController {

  // [POST] api/auth/login
  async login(req, res, next) {

    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });

    // if (user) {
    //   if (bcrypt.compareSync(req.body.password, user.password)) {
    //     console.log(user);
    //     res.send({
    //       _id: user._id,
    //       username: user.username,
    //       isAdmin: user.isAdmin,
    //       token: getToken(user),
    //     });
    //     return;
    //   }
    // }
    if (user) {
      console.log(user.name);
      res.send({
        _id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
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
