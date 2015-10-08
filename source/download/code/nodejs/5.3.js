var http = require('http'),
    port = 3000;

http.createServer(function(req, res) {
    res.writeHead(301, {
        'Location': 'http://www.baidu.com'
    });
    res.end();
}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:' + port);