const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/TMDT', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    
    console.log('> Connect data successfully!');
    } catch (error) {
        console.log('> Connect data failure!');
    }
}

module.exports = { connect } 