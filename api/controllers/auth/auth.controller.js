
const User = require('../../models/user.model');
const sendMail = require('../../sendEmail');
const { getToken } = require('../../utils');

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
        phone: user.phone,
        address: user.address,
        token: getToken(user),
      });
      return;
    }
    else {
      res.status(401).send({ message: 'Email hoặc mật khẩu không chính xác!' });
    }
  }

  // [POST] - /api/auth/confirm-email
  async confirmEmail(req, res, next) {
    const { name, email, password } = req.body;
    const user = { name, email, password };

    global.name = name;
    global.email = email;
    global.password = password;

    try {
      const code = getRandomNumberBetween(100000, 999999);
      global.code = code;
      const html = `<p>Mã xác thực của bạn là: <b>${code}</b></p>`;
      sendMail(email, 'NS3AE - Đăng ký tài khoản', html);
      res.send({ msg: "Send email successfully!", data: user });
    } catch (error) {
      res.send({ msg: error.message });
    }
  }
}

module.exports = new LoginController;
