var express   = require('express');
var bodyParser  = require('body-parser');
var cors= require('cors');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));




app.listen(8000, function(){
  console.log("listening to 8000");
});
