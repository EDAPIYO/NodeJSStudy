var http = require("http");
var url = require("url");

function start(route,handle){
    function onRequest(request,response){
	var pathname = url.parse(request.url).pathname;
	console.log("Requiest for " + pathname + " received(this is pathname)");

	route(handle,pathname,response);
	//response.writeHead(200, { "Content-Type" : "text/plain"});
	//console.log("hogee");
	//var content = route(handle,pathname)
	//response.write(content);
	//response.end();
	//console.log("onRequest is ended");
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;