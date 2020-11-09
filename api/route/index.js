const authRoute = require('./auth.route');
const registerRoute = require('./register.route');
const homeRoute = require('./home.route')
const shopingCartRoute = require('./shoping-cart.route');

function route(app) {
    app.use('/auth', authRoute);
    app.use('/register', registerRoute);
    app.use('/home', homeRoute);
    app.use('/shoping-cart', shopingCartRoute);
}

module.exports = route;