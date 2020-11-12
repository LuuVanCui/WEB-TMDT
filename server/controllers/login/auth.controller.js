
const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');

class LoginController{

    // [POST] /auth/login
    async login(req, res, next) {
        const { username, password } = req.body;
        const user = await User.findOne({username , password})
        if (user) {
            const token = jwt.sign(
                {
                    id: user._id,
                    username: user.username
                },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
            );
            return res.status(200).json({
                token,
                userId: user._id,
                username: user.username
            });
        }

        return res.status(500).json({message: "Authentication error!"});
    }
}

module.exports = new LoginController;
