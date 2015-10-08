var http = require('http');
var options = {
    host: 'www.fflove.top',
    port: 80,
    path: '/'
};
http.get(options, function(res) {
    var code = res.statusCode;
    if (code == 200) {
        console.log('the site is up');
    } else {
        console.log('site is down');
    }

}).on('error', function(e) {
    console.log('error: ' + e.message);
});