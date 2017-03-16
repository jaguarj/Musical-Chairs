var express = require('express');
var router = express.Router();

var data = require('../data.js');

//Below is where the variable seededTodos is stored.
router.get('/', function(req, res) {
  res.render('todos/index', {
    todos: data.seededTodos
  });
});

// /todos/0

router.get('/new', function(req, res){
  res.render('todos/new')
});

router.get('/:id', function(req,res) {
  var todo = data.seededTodos[req.params.id];//Need more info here.

  res.render('todos/show', {
    todo: todo
  });
});

  router.post('/', function(req, res){
    var newTodo = {
        description: req.body.description,
        urgent: req.body.urgent
    };

    data.seededTodos.push(newTodo);
    // res.send("Create a new todo is working!");
    res.redirect('/todos');
});




module.exports = router;
