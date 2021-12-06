const express = require('express');
var cors = require('cors')
const app = express();
const PORT = 8000;
var urlRouter = require('./routes/url_routes');




app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connecting to db
var connection = require('./middlewares/connection').then(db => {

    if (db != undefined) {
        console.log("Connection Success")
    } else {
        console.log("Connection Failed")
    }


}).catch(err => {
    console.log("connection failed due to " + err)
})

app.get("/ui", (req, res) => {
    res.sendFile(__dirname + "/file.html");
  });

  //setting up route for url related API's
app.use('', urlRouter);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

module.exports = app;