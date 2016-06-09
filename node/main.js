var fs = require("fs");//file reader
var http = require("http");
var messagebird = require('messagebird')('test_opUX0kAE7T6qNa7R8OTIzVtTs');
var incidentRequestURL = "https://orgen-jun7dlh005.lab.service-now.com/api/now/table/incident";

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/html
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   //var data = fs.readFileSync('index.html');
   var data = "<h1>" + messageBird() + "</h1>";


   //data = getIncidentTable();

   response.end(data);//'<h1>Hello World</h1>\n');


}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

function messageBird(){
	messagebird.balance.read(function (err, data) {
	  if (err) {
	  	console.log(err);
	    return err;
	  }
	  console.log(data);
	  return data;
	});
}