const http = require("http");
const fs = require("fs");

http.createServer(function(req,res){
    var url = req.url;
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if(url=="/"){
        fs.readFile('index.html',function(err,data){
            return res.end(data);
        })
    } else if(url == '/about') {
        fs.readFile('about.html', function(err, data) {
            return res.end(data);
        })
    } else if(url == '/contact-me') {
        fs.readFile('contact-me.html', function(err, data) {
            return res.end(data);
        })
    } else {
        fs.readFile('404.html', function(err, data) {
            return res.end(data);
        })
    }
}).listen(8080);
