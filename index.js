const express = require('express')
const app = express();
const mongoose = require('mongoose')
const booksRouter = require('./Routes/Books_rout')
const userRoutes = require('./Routes/userRoutes');

app.use(express.json())
app.use("", booksRouter);
app.use('/api', userRoutes);

app.listen(5000, ()=> console.log('server running on 5000'))

mongoose.connect('mongodb://localhost:27017/sample')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))



app.get('/', (req, res)=>{
    res.send('server reacted...')
})
