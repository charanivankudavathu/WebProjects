const fs = require("fs");

const fileName = "sample.txt";

fs.writeFileSync(
    fileName,
    "This file was created using Node.js fs module."
);

console.log("File created successfully.");

const data = fs.readFileSync(
    fileName,
    "utf8"
);

console.log("File Content:");
console.log(data);

fs.appendFileSync(
    fileName,
    "\nThis line was added later."
);

console.log("Content appended successfully.");