const http = require('http'); // Import http module
const os = require('os');//import os module
// Create a server with response "Hello"
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Prathamesh korde</h1>');
    res.end();
});


console.log(os.cpus());

console.log(os.userInfo());


// Listen to the server on port 3002 with localhost IP
server.listen(3002, '127.0.0.1', () => {
    console.log('Server is running on port 3002'); // Corrected console message
});
