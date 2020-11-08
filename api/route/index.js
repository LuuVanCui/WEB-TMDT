
const authRoute = require('./auth.route');
const registerRoute = require('./register.route');
const homeRoute = require('./home.route')
function route(app) {
    app.use('/auth', authRoute);
    app.use('/register', registerRoute);
    app.use('/home', homeRoute);
} 

module.exports = route;