const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });

    response.end("Basic HTTP Server is Working");
});

server.listen(3000, () => {
    console.log("HTTP server started on port 3000");
});