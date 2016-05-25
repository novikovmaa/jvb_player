console.log("start");

var urlStats = "http://147.75.197.183:8080/colibri/stats";
var urlConf = "http://147.75.197.183:8080/colibri/conferences"

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpPOST(theUrl, postData, callback) {
  var method = "POST";
  var async = true;
  var request = new XMLHttpRequest();

  request.onload = function () {

    var status = request.status;
    var data = request.responseText;
    callback(data);
  }

  request.open(method, theUrl, async);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.send(postData);
}

function httpGet(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

function httpGetAsync(theUrl, callback)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

function onRec(response) {
  console.log(response);
}

httpGetAsync(urlStats, onRec);