const http = require("http");

http.createServer((req,res)=>{
    res.writeHead(403, {'Content-Type': 'text/xml'});
    res.end('<h1>Hola</h1>');
}).listen(3000);