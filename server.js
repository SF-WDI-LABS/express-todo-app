// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

// our database is an array for now with some hardcoded values
var todos = [
  { _id: 1, task: 'Laundry', description: 'Wash clothes' },
  { _id: 2, task: 'Grocery Shopping', description: 'Buy dinner for this week' },
  { _id: 3, task: 'Homework', description: 'Make this app super awesome!' }
];

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 *
 * The comments below give you an idea of the expected functionality
 * that you need to build. These are basic descriptions, for more
 * specifications, see the todosTest.js file and the outputs of running
 * the tests to see the exact details. BUILD THE FUNCTIONALITY IN THE
 * ORDER THAT THE TESTS DICTATE.
 */
////// not sure
app.get('/api/todos/search', function search(req, res) {
  /* This endpoint responds with the search results from the
   * query in the request. COMPLETE THIS ENDPOINT LAST.
   */
});

app.get('/api/todos', function index(req, res) {
res.json(200,{todos:todos});  /* This endpoint responds with all of the todos
   */
});
//We did this solution in class, it was hard to follow so I'm not getting much of it.
app.post('/api/todos', function create(req, res) {
   /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.
   */
   var newTask = req.body.task; //
   var newDescription = req.body.description;
   var newId = todos.length+1;
   var newTaskObject = {_id: newId, task: newTask, Description: newDescription};
   todos.push(newTaskObject);
   res.status(200).json(newTaskObject);
});
///////////
/// from solutions with my comments!
//////////
/*
  // create new todo with form data (`req.body`)
  var newTodo = req.body;    // request body from object

  // set sequential id (last id in `todos` array + 1)
  if (todos.length > 0) {                 // if object body length is greater than 0
    newTodo._id = todos[todos.length - 1]._id + 1;  // I think add new thing in object
  } else {
    newTodo._id = 1;
  }

  // add newTodo to `todos` array
  todos.push(newTodo);  // pushes new object into the array

  // send newTodo as JSON response
  res.json(newTodo);  // responds to the client with new object
});
*/
app.get('/api/todos/:id', function show(req, res) {
  var id = parseInt(req.params.id);
   console.log(id);
   var theRightOne;
   return todo._id == id;})[0]);
   res.json(200)({});
   /* This endpoint will return a single todo with the
   * id specified in the route parameter (:id)
   */
});

///////////
/// from solutions with my comments!
//////////
app.put('/api/todos/:id', function update(req, res) {
  // get todo id from url params (`req.params`)
  var todoId = parseInt(req.params.id); // looks for index id and stores it in a variable

  // find todo to update by its id
  var todoToUpdate = todos.filter(function (todo) {
    return todo._id == todoId;// filter function opens object and returns the index we are looking for.
  })[0];

  // update the todo's task
  todoToUpdate.task = req.body.task;// not sure what this does

  // update the todo's description
  todoToUpdate.description = req.body.description; // I'm guessing this and the one above update the descriptions of the object being updated

  // send back updated todo
  res.json(todoToUpdate); // client being told information about update
});
///////////
/// from solutions with my comments!
//////////
app.delete('/api/todos/:id', function destroy(req, res) {
  // get todo id from url params (`req.params`)
  var todoId = parseInt(req.params.id); //var for parseInt is the location of object

  // find todo to delete by its id
  var todoToDelete = todos.filter(function (todo) { // I think this variable finds then holds the 0 index from the object to delete it.
    return todo._id == todoId;
  })[0];

  // remove todo from `todos` array
  todos.splice(todos.indexOf(todoToDelete), 1);// If I'm correct this removes the seleceted index from the object to delete

  // send back deleted todo
  res.json(todoToDelete); //this tells the client what has been deleted from the object.
});
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
