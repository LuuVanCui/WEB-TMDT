const User = require('../../models/user.model');

class UserController {
    // [GET] - /api/users
    async getAllUsers(req, res) {

        try {
            const users = await User.find();
            if (users) {
                res.send(users);
            } else {
                res.status(401).send({ error: 'Invalid user' });
            }
        } catch (error) {
            res.send({ msg: error.message });
        }
    }

    // [POST] - /api/users/add-user
    async addUser(req, res) {
        const { code } = req.body;
        if (code === global.code) {
            try {
                const userExist = await User.find({ email: global.email });
                if (userExist) {
                    res.status(401).send({ email: global.email, error: "Tài khoản email đã tồn tại!" });
                }

                const user = new User({
                    name: global.name,
                    email: global.email,
                    password: global.password
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
        } else {
            res.send({ msg: 'Code wrong!' })
        }
    }

    // [DELETE] - /api/users/:id
    async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            const deletedUser = await User.deleteOne({ _id: userId });
            res.send(deletedUser);
        } catch (error) {
            res.send({ msg: error.message });
        }
    }
}

module.exports = new UserController;
