// Create web server
import { createServer } from 'http';

// Create a server object
const server = createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response
    res.end('Hello, world!');
});

// Start the server
server.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});
