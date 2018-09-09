var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
const route = require('./routes/route');

var app = express();

// CONNECT TO MONGO DB
mongoose.connect('mongodb://localhost:27017/contacts');

// ON CONNECTION 
mongoose.connection.on('connected', () => {
    console.log('Connected to database contacts');
});

mongoose.connection.on('error', (err) => {
    if(err){
        console.log('Error connecting to database' + err);
    }
});

// PORT
const port = 3000;

// CORS
app.use(cors());

// BODY PARSER
app.use(bodyParser.json());

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/api/', route);

app.listen(port, () => {
    console.log('Server started at port: ', port);
});

