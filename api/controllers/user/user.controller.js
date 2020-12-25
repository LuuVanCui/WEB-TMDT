const User = require('../../models/user.model');
const mailer = require('../../sendEmail');

class UserController {
    // [GET] - /api/users
    async getAllUsers(req, res) {

        let sendMail = async (req, res) => {
            try {
                // Lấy data truyền lên từ form phía client
                const { to, subject, body } = req.body
                // Thực hiện gửi email
                await mailer.sendMail(to, subject, body)
                // Quá trình gửi email thành công thì gửi về thông báo success cho người dùng
                res.send('<h3>Your email has been sent successfully.</h3>')
            } catch (error) {
                // Nếu có lỗi thì log ra để kiểm tra và cũng gửi về client
                console.log(error)
                res.send(error)
            }
        }
        sendMail(req, res);

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
        try {
            const user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;

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