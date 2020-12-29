const { response } = require('express');
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
        if (parseInt(code) === global.code) {
            try {
                const user = new User({
                    name: global.name,
                    email: global.email,
                    password: global.password
                });
                const saveUser = await user.save();
                if (saveUser) {
                    res.send({ message: "Add user successfully!", data: user });
                } else {
                    res.send({ message: 'Input error!' });
                }
            } catch (error) {
                res.send({ message: error.message });
            }
        } else {
            res.status(401).send({ message: 'Bạn đã nhập sai mã!' })
        }
    }

    // [PATCH] - /api/users/update-password
    async updatePassword(req, res) {
        const { email, password } = req.body;
        try {
            const userUpdated = await User.updateOne({ email }, { password });
            if (userUpdated) {
                res.send({ message: "Update user successfully!", data: userUpdated });
            }
        } catch (error) {
            res.send({ message: error.message });
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
