const jwt = require('jsonwebtoken');

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '48h',
    }
  );
};

module.exports = getToken;