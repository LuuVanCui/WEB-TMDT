
const Login = require('../models/login.model');

class LoginController {
    // [GET] /auth
    async getUser(req, res) {
        const users = await Login.find();
        res.json(users);
    }

    // [POST] /auth/create
    create(req, res) {
        const user = new Login({
            username: req.body.username,
            password: req.body.password
        });
        user.save()
            .then(() => {
                console.log('Save successfully!');
            })
            .catch(() => {
                console.log('Save error!');
            });
    }
}

module.exports = new LoginController;
