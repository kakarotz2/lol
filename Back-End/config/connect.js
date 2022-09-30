const mongoose = require('mongoose');

const uri = 'mongodb+srv://pluto:1234@thesun.0kmymse.mongodb.net/pluto?retryWrites=true&w=majority';

async function connect() {
    await mongoose.connect(uri, (err) => {
        if (!err) {
            console.log('Connect Successfully !!');
        } else {
            console.log('Connect Fail!' + err);
        }
    });
}

module.exports = { connect };
