const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, maxLength: 255 },
    des: { type: String, maxLength: 600 },
    images: { type: String, maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});

const MyModel = mongoose.model('Course', Course);

module.exports = MyModel 
