// port
const port = process.env.PORT || 4000;

//Express + cors
const express = require('express');
const app = express();
const cors = require('cors');

//app uses
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongoose + mongodb 
const mongoose = require('mongoose');


app.use('/api/books', require('./routes/books.route'));

mongoose.connect('mongodb://localhost/books', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB');
});
app.listen(port, () => console.log(`Listening to port ${port}`))