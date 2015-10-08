var http = require('http'),
    url = require('url'),
    port = 3000,
    host = '127.0.0.1';

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('hello world');
    } else if (pathname === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('about us');
    } else if (pathname === '/redirect') {
        res.writeHead(301, {
            'Location': 'http://www.baidu.com'
        });
        res.end();
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('404 not found');
    }
}).listen(port, host);
console.log('Server running at http://127.0.0.1:' + port);