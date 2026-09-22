const name = "Node.js";
const version = "Backend Runtime";

function displayMessage() {
    return "Learning " + name + " - " + version;
}

console.log(displayMessage());

const numbers = [10, 20, 30, 40, 50];

const total = numbers.reduce((sum, value) => {
    return sum + value;
}, 0);

console.log("Total:", total);