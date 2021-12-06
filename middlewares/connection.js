var mongoose = require('mongoose');


var conn = mongoose.connect('mongodb+srv://admin2:testpass@cluster0.w8z90.gcp.mongodb.net/Test?retryWrites=true&w=majority', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then((db) => {
        console.log('Database connected');

        return db
    })
    .catch((error) => {
        console.log('Error connecting to database' + error);
    });

module.exports = conn