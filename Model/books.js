const mongoose = require('mongoose')

const booksSchema = {
    bookId: {type: Number, required:true},
    name: {type: String, required:true},

    
}
module.exports = mongoose.model("Book", booksSchema)