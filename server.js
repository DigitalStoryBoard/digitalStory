var express   = require('express');
var bodyParser  = require('body-parser');
var cors= require('cors');
var mongoose = require('mongoose');

var commentCtrl = require("./commentCtrl.js");


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get('/comment', commentCtrl.read);
app.post('/comment', commentCtrl.create);

mongoose.connect("mongodb://localhost:27017/threeQuestions");
mongoose.connection.once('open', function(){
    console.log("Connected to your database.");
});

app.listen(8000, function(){
  console.log("listening to 8000");
});
