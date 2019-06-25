var express = require('express');
var app = express();

//Reusable controllers
var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var students = [
    {id:1, name:"prachi",marks:90},
    {id:2, name:"akanksha",marks:89}
	{id:3, name:"gargi",marks:92},
  ];
  res.send(students);
};

// setting router to map requests  with controllers
app.get ('/students',studentController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})