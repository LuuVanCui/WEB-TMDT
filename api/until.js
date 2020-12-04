const jwt = require('jsonwebtoken');

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    'RANDOM_TOKEN_SECRET',
    {
      expiresIn: '48h',
    }
  );
};

module.exports = getToken;