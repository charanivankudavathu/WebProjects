const http = require("http");

const server = http.createServer((request, response) => {

    console.log("Request received:");
    console.log("Method:", request.method);
    console.log("URL:", request.url);

    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    response.end(
        "<h1>Request received and response sent successfully</h1>"
    );
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});