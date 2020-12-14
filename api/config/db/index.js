const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://hieu:hieu123@cluster0.oosdg.mongodb.net/WEB-TMDT?authSource=admin&replicaSet=atlas-xx6s3b-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('> Connect data successfully!');
    } catch (error) {
        console.log('> Connect data failure!');
    }
}

module.exports = { connect } 