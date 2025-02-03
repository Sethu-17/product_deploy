const express = require('express')
const app = express();
const mongoose = require('mongoose')
const booksRouter = require('./Routes/Books_rout')
const userRoutes = require('./Routes/userRoutes');

app.use(express.json())
app.use("", booksRouter);
app.use('/api', userRoutes);

app.listen(5000, ()=> console.log('server running on 5000'))

mongoose.connect('mongodb://localhost:27017/sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000, // 30 seconds
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));




app.get('/', (req, res)=>{
    res.send('server reacted...')
})
