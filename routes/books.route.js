const express = require('express');
const bookController = require('../controllers/book.controller')
const router = express.Router();


router.get('/', (req, res) => {
    bookController.getAllBook(req, res);
}).get('/:year', (req, res) => {
    bookController.getAllBookByYear(req, res);
}).get('/:name', (req, res) => {
    bookController.getAllBookByYear(req, res);
}).post('/', (req, res) => {
    bookController.addNewBook(req, res);
}).delete('/:id', (req, res) => {
    bookController.deleteBook(req, res);
}).put('/:id', (req, res) => {
    bookController.updateBook(req, res);
})

module.exports = router;