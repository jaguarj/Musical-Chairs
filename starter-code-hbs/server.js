/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));



// controllers
//This is telling the server that we have another file
//or route or different page with our todos on it and how we
//will need to call it.
//Make a var called todosController and set it equal to 'require'
// i.e. "  require('./controllers/todos.js');  "
// for Express to grab this file when the user types in http://localhost:3000/todos.....
//the todos.js then fires off

var todosController = require('./controllers/todos.js');
app.use('/todos', todosController);

// log //??
app.use( logger('dev'));

/*Views*/
app.set('view engine', 'hbs');//This is the method to view the pages.

/* HOME */
app.get('/', function(req,res) {//This is setting the default home page.
  res.send('This is our Home Page');//We are sending this information to the user.
});

// Start server //This is how to set express to listen for a port function.
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
