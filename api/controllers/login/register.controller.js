
const User = require('../../models/user.model');

class RegisterController {

    // [POST] /register
    async register(req, res, next) {
        const {username, password, email, phone, address, image} = req.body;
        
        const user = new User({
            username, password, email, phone, address, image
        });

        try {
            const saveUser = await user.save();
            res.json(saveUser);
        } catch(err) {
            res.json({message: err});
        }
    }
}

module.exports = new RegisterController;
