var express = require('express');//Step 1
var app = express();//Step 1
var hbs = require('hbs');
var bodyParser = require('body-parser');

app.set('view engine', 'hbs'); //Step 3. Setup view engine to view page with app.set.

app.use(express.static(__dirname + '/public/css'));
app.use(bodyParser.urlencoded({
	extended: true
}));

var recipesController = require('./controllers/recipes_controller.js')
app.use('/recipes', recipesController)

app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

var port = process.env.PORT || 3000;//Step 2, setup server.

app.listen(port, function(){
	console.log("Hello we're all good, listening on port 3000!")
});



