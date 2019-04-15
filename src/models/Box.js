const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: string,
        required: true
    }, files: []
}, {
        timestamps: true
});

module.exports = mongoose.model('Box' , Box);
