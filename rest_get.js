var https = require('http');

var getheaders = {
    'Authorization' : 'xxxxx'
};

var optionsget = {
    host : 'xxx.com',
    port : 80,
    path : 'xxx',
    method : 'GET',
    headers : getheaders
};


var reqGet = https.request(optionsget, function(res) {

	res.on('data', function(d){
		process.stdout.write(d);
	    });
});
reqGet.end();
reqGet.on('error', function(e){
	console.error(e);
});

