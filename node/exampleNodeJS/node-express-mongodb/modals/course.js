const {Schema, model} = require('mongoose');

const newShema = new Schema({
    title: {
        type: String,
        required: true //поле говорит об обязательном наличии
    },
    price: {
        type: Number,
        required: true,
    },
    img: String
});

module.exports = model('Course', newShema) //первый параметр название модели