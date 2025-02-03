const booksController = require('../Controller/books_ctrl')
const router = require('express').Router()

router.get('/api/books', booksController.getAllBooks);
router.get('/api/books/:id', booksController.getSingleBooks)
router.post('/api/books', booksController.createBook)
router.put('/api/books/:id', booksController.updateBook)





module.exports = router