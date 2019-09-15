const {Schema, model} = require('mongoose');

const userSchema = new Schema({

    //поля пользователей
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cart: {
        items: [{
            count: {
                type: Number,
                required: true,
                default: 1
            },
            courseId: {
                type: Schema.Types.ObjectId, //тип курса, ид самой базы
                ref: 'Course', //референция, связь параметра с другим объектом из базы
                required: true,
            }
        }]
    }
});

module.exports = model('User', userSchema);