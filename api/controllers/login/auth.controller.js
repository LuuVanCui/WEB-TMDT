
const User = require('../../models/user.model');

class LoginController {

    // [POST] /auth/login
    async login(req, res, next) {
        const { username, password } = req.body;
        
        const user = await User.findOne({username, password});
        
        if (user) {
            console.log(username);
            res.json({username});
        }

        console.log('Login fail');
        res.json({error: 'Wrong username or password!'});
    }
}

module.exports = new LoginController;
