
const authRoute = require('./auth.route');
const registerRoute = require('./register.route');

function route(app) {
    app.use('/auth', authRoute);
    app.use('/register', registerRoute);
} 

module.exports = route;