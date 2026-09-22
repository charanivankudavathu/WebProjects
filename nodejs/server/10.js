function callbackExample(callback) {
    setTimeout(() => {
        callback("Callback completed");
    }, 1000);
}

function promiseExample() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise completed");
        }, 1000);
    });
}

async function asyncAwaitExample() {
    const result = await promiseExample();
    console.log(result);
}

callbackExample((message) => {
    console.log(message);
});

promiseExample()
    .then((message) => {
        console.log(message);
    });

asyncAwaitExample();