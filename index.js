
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const MongoClient = require('mongodb').MongoClient;

const port = 8000;
const app = express();
const url = 'mongodb://localhost:27017/chat';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


db.connect(url,err=> {
    if (err) {return console.log(err);}
    app.listen(port, () => {console.log('Server started!');})
});


const routes = require('./routs/api/routes')(app);
//const routes2 = require('./routs/api/routes2')(app);