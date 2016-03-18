/* CMPE 172 HW 2 - Kevin Lai */

var http = require('http');
var fs = require('fs');

/* Part 1a */
/*
var data = fs.readFileSync('./index.html');

http.createServer(function(request, response) {

        response.writeHead(200, {"Context-Type": "text/html"});
        response.write(data);
        response.end();

    }).listen(process.env.PORT || 8080);

console.log("Listening to server at http://localhost:8080\n");

console.log("Loaded data after finish reading index.html:\n" + data);
*/

/* Part 1b */

fs.readFile('./index.html', function(err, data) {
    if(err) {
        throw err;
    }

    http.createServer(function(request, response) {

        response.writeHead(200, {"Context-Type": "text/html"});
        response.write(data);
        response.end();

    }).listen(process.env.PORT || 8080);

    console.log("Loaded data after finish reading index.html:\n" + data);

});

console.log("Listening to server at http://localhost:8080\n");
