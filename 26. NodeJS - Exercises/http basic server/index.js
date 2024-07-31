import http from 'http';

const server = http.createServer(function (req, res) {
    console.log('Request recived!');
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.write('<h1>Hello From Node Server!</h1>');

    res.end();
});

server.listen(5000);

console.log('Server listeing on http://localhost:5000');
