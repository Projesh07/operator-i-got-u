// Required files

var express =require('express');
var body_parser=require('body-parser');
//Controller including

var homeController = require('./controllers/homeController');


var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

// Calling the conttroller
// changed git
homeController(app);
app.listen('3000');

console.log("You are listening port 3000");
