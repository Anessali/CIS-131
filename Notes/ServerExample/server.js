var http = require('http');
var url = require('url');
var fs = require('fs');

//creates server
http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);

    switch(pathname){
        case '/':
            theFile = "index.html";
            break;
        case '/about.html':
            theFile = "about.html";
            break;
    }

    fs.readFile(theFile, function(err, data){
        res.writeHead('200', {
            'Content-text' : 'text/html'
        });
        res.end(data);
    });   

    // if (pathname === "/"){
    //     res.writeHead('200', {  
    //         'content-type' : "text/plain"
    //     });
    //     res.end("index.html");
    // } else {
    //     res.writeHead('404', {
    //         'content-type' : 'text/plain'
    //     });
    //     res.end('File not found');
    // }
    
}).listen(3000);

console.log("My server is now running");