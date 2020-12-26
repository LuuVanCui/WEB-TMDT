
const User = require('../../models/user.model');

class RegisterController {

    // [POST] /register
    async register(req, res, next) {
        const { name, email, password, rePassword } = req.body;

        const user = new User({
            username, password, email, phone, address, role
        });

        try {
            const saveUser = await user.save();
            res.send(saveUser);
        } catch {
            res.send({ message: 'Username already exist!' });
        }
    }
}

module.exports = new RegisterController;
