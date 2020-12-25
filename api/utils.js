const jwt = require('jsonwebtoken');

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '48h',
    }
  );
};

const isAuth = (req, res, next) => {
  try {
    // const token = req.headers.authorization;

    const token = req.cookies['userInfo'];

    if (token) {
      // const onlyToken = token.slice(7, token.length);
      jwt.verify(token, process.env.JWT_SECRET || 'somethingsecret', (err, decode) => {
        if (err) {
          return res.status(401).send({ message: 'Invalid Token' });
        }
        req.user = decode;
        next();
        return;
      });
    } else {
      return res.status(401).send({ message: 'Token is not supplied.' });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getToken, isAuth };
