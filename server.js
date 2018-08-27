
var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequestOne(request, response) {
  response.end("You're the best!");
}

function handleRequestTwo(request, response) {
  response.end("You're not the best, but that's okay.");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function() {
  console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {
  console.log("Server listening on: http://localhost:" + PORTTWO);
});