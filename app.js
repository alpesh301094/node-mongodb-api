const http = require('http');
const fs = require('fs');
const PORT = 3000;
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, { "Content-Type" : "text/html"})
        fs.readFile('page/home.html', 'utf8' , (err, data) =>{
            if(err) throw err;
            res.write(data);
            res.end();
        });
    } else if(req.url === "/create-file"){
        const data = "<h1>This is a test file update</h1>";
        fs.appendFile('temp/test.html', data , (err) =>{
            if(err) throw err;
            res.write("Create file and write");
            res.end();
        });
    } else{
        res.writeHead(200, { "Content-Type" : "text/html"})
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
});

console.log(`Server URL: http://localhost:${PORT}/`);
server.listen(PORT);