const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Book has {name, aurther, publish year,language,stars}
const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    aurther: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true,
        minLength: [2, 'minLength is 2'],
        maxLength: [2, 'maxLength is 2']
    },
    stars: {
        type: Number,
        required: true,
        min: [1, 'min is 1'],
        max: [5, 'max is 5']
    }
})


const BookModel = mongoose.model('Books', BookSchema);

module.exports = {
    BookModel
}
