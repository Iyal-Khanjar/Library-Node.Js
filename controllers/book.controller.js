const BookModel = require('../models/book.model').BookModel;

// get all books  
const getAllBook = ((req, res) => {
    BookModel.find({}, (err, data) => {
        if (err) throw err;
        res.status(200).json(data);
    })
})

// get all books by year
const getAllBookByYear = ((req, res) => {
    let year = req.params.year;

    BookModel.find({ publishYear: year }, (err, data) => {
        if (err) throw err;
        res.status(200).json(data);
    })
})

// add new Book
const addNewBook = ((req, res) => {
    const { name, aurther, publishYear, language, stars } = req.body;

    if (publishYear < new Date().getFullYear()) {
        const Book = new BookModel({
            name: name,
            aurther: aurther,
            publishYear: publishYear,
            language: language,
            stars: stars
        })
        Book.save().then(data => {
            res.status(200).json(data);
        })
    } else {
        return res.status(400).json({ updatedBook: 'wrong year' })
    }

})

// delete book
const deleteBook = ((req, res) => {
    const _id = req.params.id;

    BookModel.findByIdAndDelete(_id, (err, data) => {
        if (err) throw err;
        if (data) {
            return res.status(200).json({ deletedObj: data });
        }
        return res.status(400).json({ deletedObj: 'Not Found' })
    })
})

// update book
const updateBook = ((req, res) => {
    const _id = req.params.id;
    const { name, aurther, publishYear, language, stars } = req.body;
    const updatedBook = {
        name: name,
        aurther: aurther,
        publishYear: publishYear,
        language: language,
        stars: stars
    }
    BookModel.findByIdAndUpdate(_id, updatedBook, (err, data) => {
        if (err) throw err;
        if (data) {
            return res.status(201).json({ updatedBook: { _id, ...updatedBook } })
        }
        return res.status(400).json({ updatedBook: 'Not Found' })
    })
})
module.exports = {
    getAllBook,
    getAllBookByYear,
    addNewBook,
    deleteBook,
    updateBook
}