const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: string,
        required: true
    }, 
    path:{
        type: string,
        required: true
    }
}, {
        timestamps: true
});

module.exports = mongoose.model('File' , File);
