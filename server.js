var express = require('express');
var app = express();
var fs = require("fs");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var btoa = require("btoa");
var formidable = require("formidable");

var j;
var bodyOut = "";

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.get('/signedIn', function (req, res) {
  var requestBody = "";

  console.log(req.query.user);
  var name = req.query.user;

  var client = new XMLHttpRequest();
  client.open("get","https://orgen-jun7dlh005.lab.service-now.com/api/x_snc_twitter_inci/incidentretrieval/data?id=@" + name);

  client.onreadystatechange = function() { 
    if(client.readyState == 4 && client.status == 200) {
      console.log("Data recieved");
      j = JSON.parse(client.responseText);
      console.log(j);

      bodyOut = "<ul style=\'list-style-type: none; padding: 10px; font-family: helvetica;\'>"

      for (var i in j.result) {
        var course = j.result[i].course || "";
        var department = j.result[i].department || "";
        var priority = j.result[i].priority;
        var description = j.result[i].description;
        console.log("Course: " + course + " Dep: " + department + " Priority: " + priority + " Desc: " + description);
        bodyOut += "<li style=\'margin-bottom: 20px;\'>" + "<b>Course:</b> " + course + " <b>Dep:</b> " + department + " <b>Priority:</b> " + priority + " <b>Desc:</b> " + description + "</li>";
      }

      bodyOut += "</ul>";
      res.send(bodyOut);
    }
  }; 
  client.send(requestBody);
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:" + port);

})