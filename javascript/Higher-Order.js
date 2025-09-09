
// Higher-Order function
function doMath(a, b, operation) {
    return operation(a, b); // call the function passed in
}

function add(x, y) {
    return x + y;
}

console.log(doMath(5, 3, add)); // 8

// Higher-Order function
function f1(name) {
    return 'pronoy, ' + name
}

function f2(callback) {
    const name = "banik";
    return callback(name)
}

console.log(f2(f1));