const path = require("path");

const filePath = path.join(
    __dirname,
    "files",
    "example.txt"
);

console.log("Complete Path:");
console.log(filePath);

console.log("Directory:");
console.log(path.dirname(filePath));

console.log("File Name:");
console.log(path.basename(filePath));

console.log("Extension:");
console.log(path.extname(filePath));