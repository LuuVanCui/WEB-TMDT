
const User = require('../../models/user.model');

class RegisterController {

    // [POST] /register
    async register(req, res, next) {
        const {username, password, email, phone, address, isAdmin} = req.body;
        
        const user = new User({
            username, password, email, phone, address, isAdmin
        });

        try {
            const saveUser = await user.save();
            res.send(saveUser);
        } catch {
            res.send({message: 'Username already exist!'});
        }
    }
}

module.exports = new RegisterController;
