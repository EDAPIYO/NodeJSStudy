function route(handle, pathname,response){
    console.log("(this is router side)About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function'){
	handle[pathname](response);
	//console.log(pathname + " is handled");
    }else{
	console.log("No request handler found for " + pathname);
	response.writeHead(404,{"Content-Type": "text/plain"});
	response.write("404 Not Found");
	response.end();
	//return "404 Not Found";
    }
}

exports.route = route;
