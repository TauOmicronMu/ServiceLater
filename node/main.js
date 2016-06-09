var fs = require("fs");//file reader
var http = require("http");
var incidentRequestURL = "https://orgen-jun7dlh005.lab.service-now.com/api/now/table/incident";

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/html
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   var data = fs.readFileSync('index.html');
   data = getIncidentTable();
   
   response.end(data);//'<h1>Hello World</h1>\n');


}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

function getIncidentTable(){
	var requestBody = ""; 

	var client=new XMLHttpRequest();
	client.open("get","https://orgen-jun7dlh005.lab.service-now.com/api/now/table/incident");

	client.setRequestHeader('Accept','application/json');
	client.setRequestHeader('Content-Type','application/json');

	//Eg. UserName="admin", Password="admin" for this code sample.
	client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'admin'));

	client.onreadystatechange = function() { 
		if(this.readyState = this.DONE) {
			//document.getElementById("response").innerHTML=this.status + this.response; 
			return this.response;
		}
	}; 
	client.send(requestBody);
}