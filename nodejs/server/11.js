function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {
    const result = divide(10, 0);
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}

function asyncOperation() {
    return Promise.reject(
        new Error("Something went wrong in the asynchronous operation")
    );
}

asyncOperation()
    .catch((error) => {
        console.log("Async Error:", error.message);
    });

console.log("Application continues running.");