
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');
        // resolve('This is my second resolved data which will be ignored as the resolve only works once with one bit of data');
        resolve({
            name: 'Bill',
            age: 25
        })
        // reject('something went wrong!');
    }, 1500);
});

// Asynchronously run this function when the data is set.
promise.then((data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise!');
        }, 3500);
    });
}).then((str) => {
    console.log('Does this run?', str);
})
.catch((error) => {
    console.log('error: something went wrong!');
});