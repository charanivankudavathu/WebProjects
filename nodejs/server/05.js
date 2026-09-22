const os = require("os");
const path = require("path");
const { URL } = require("url");

console.log("Operating System:", os.platform());
console.log("CPU Architecture:", os.arch());

const filePath = path.join("nodejs", "server", "05.js");

console.log("File Path:", filePath);

const website = new URL(
    "https://example.com/products?id=101"
);

console.log("Hostname:", website.hostname);
console.log("Product ID:", website.searchParams.get("id"));