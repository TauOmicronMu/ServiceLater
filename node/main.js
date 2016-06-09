var fs = require("fs");//file reader
var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   var data = fs.readFileSync('index.html');
   response.end(data);//'<h1>Hello World</h1>\n');


}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');