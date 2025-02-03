const Books = require('../Model/books');



exports.getAllBooks = async (req, res) =>{
    try{
        const books = await Books.find()
        res.json(books)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleBooks = async (req, res) =>{
    try {
        const books = await Books.findOne({bookId: req.params.id})
        if(!books)
            return res.status(404).json({msg: 'book Not found'})
        
        res.json(books)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}


exports.createBook = async(req, res) =>{
    try{
        const Book = await Books.findOne({bookId: req.body.bookId})
        if(!Book){
            const addedBook = await Books.create(req.body)
            res.json(addedBook)
        }
        else{
            res.json({msg: 'Book already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}


exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body; 
        const fetchedBook = await Books.findOne({ bookId: id });

        if (fetchedBook) {
            fetchedBook.name = name;
            await fetchedBook.save(); 
            res.json({ msg: 'Book updated successfully', updatedBook: fetchedBook });
        } else {
            res.status(404).json({ msg: 'Book doesn\'t exist' });
        }
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}


