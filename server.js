var express = require('express');
var app = express();
var fs = require("fs");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var btoa = require("btoa");

var j;
var bodyOut = "";

app.get('/', function (req, res) {
  var requestBody = "";

  var client = new XMLHttpRequest();
  client.open("get","https://orgen-jun7dlh005.lab.service-now.com/api/x_snc_twitter_inci/incidentretrieval/data?id=@Genius");

  client.onreadystatechange = function() { 
    if(client.readyState == 4 && client.status == 200) {
      console.log("Data recieved");
      j = JSON.parse(client.responseText);
      console.log(j);

      bodyOut = "<ul>"

      for (var i in j.result) {
        var course = j.result[i].course || "";
        var department = j.result[i].department || "";
        var priority = j.result[i].priority;
        var description = j.result[i].description;
        console.log("Course: " + course + " Dep: " + department + " Priority: " + priority + " Desc: " + description);
        bodyOut += "<li>" + "Course: " + course + " Dep: " + department + " Priority: " + priority + " Desc: " + description + "</li>";
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