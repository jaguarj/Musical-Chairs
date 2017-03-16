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
	res.render('recipes', {
		recipes: recipes.seededRecipes
	});
});

app.get('/recipes/new', function(req, res){//This is ok.
	res.render('new')
});

app.post('/', function(req, res){
	var newRecipe = {
		title: req.body.title,
		veggie: req.body.veggie
		// imageUrl: req.body.imageUrl
	};

	recipes.seededRecipes.push(newRecipe);
  	res.redirect('/recipes');
})

var port = process.env.PORT || 3000;//Step 2, setup server.
app.listen(port, function(){
	console.log("Hello we're all good, listening on port 3000!")
});



