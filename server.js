var express = require('express');//Step 1
var app = express();//Step 1
var hbs = require('hbs');



var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));




var recipes = require('./recipes.js');
app.set('view engine', 'hbs'); //Step 3. Setup view engine to view page with app.set.

app.get('/recipes', function(req, res){// Step 4 set app page for a GET/read.
	res.send(recipes);
});

app.get('/recipes/new', function(req, res){//This is ok.
	res.render('new')
});

app.post('/recipes/new', function(req, res){
	res.send('This is a new recipe!')
})

var port = process.env.PORT || 3000;//Step 2, setup server.
app.listen(port, function(){
	console.log("Hello we're all good, listening on port 3000!")
});



