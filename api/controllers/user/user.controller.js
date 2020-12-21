const User = require('../../models/user.model');

class UserController {
    // [GET] /api/users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            if (users) {
                res.send(users);
            } else {
                res.send({ error: 'Invalid user' });
            }
        } catch (error) {
            res.send({ msg: error.message });
        }
    }

    async addUser(req, res) {
        try {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            const saveUser = await user.save();
            if (saveUser) {
                res.send(saveUser);
            } else {
                res.send({ msg: 'Input error!' });
            }
        } catch (error) {
            res.send({ msg: error.message });
        }
    }
}

module.exports = new UserController;