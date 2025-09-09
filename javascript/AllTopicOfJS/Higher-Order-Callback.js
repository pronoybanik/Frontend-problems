//1. Custom Map Function
// Write a function myMap(arr, callback) that works like the built-in .map().
// Input: an array of numbers and a callback that doubles each number.
// Output: a new array with the doubled numbers.

function myMap(arr, callback) {
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        result.push(callback(arr[index]))
    }
    return result;
}

function double(arr) {
    return arr * 2;
}
console.log(myMap([2, 3, 5, 6], double));

// esay wey
const arr = [2, 3, 5, 6];
const mapValue = arr.map((v, i, a) => (
    v * 2
));
console.log("Map", mapValue);

// Parentheses () → implicit return.
// Curly braces {} → need explicit return.



// 2. Filtering with a Callback
// Create a function filterStrings(arr, callback) that takes an array of strings and a callback.
// The callback decides whether a string should be kept.
// Test it by keeping only strings longer than 3 characters.

function filterStrings(arr, callback) {
    let result = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (callback(element)) {
            result.push(element)
        }

    }

    return result;
}


function stringValue(element) {
    return element.length > 3;
}

console.log(filterStrings(["pro", "table", "ttt"], stringValue));

// 3. Delayed Execution
// Write a function delayedGreeting(name, callback) that waits 2 seconds before calling the callback.
// Example: delayedGreeting("Alice", (n) => console.log("Hello " + n))
// Output (after 2s): Hello Alice


// 4. Apply a Function N Times
// Write a higher-order function repeat(fn, n) that calls a given function fn exactly n times.
// Example: repeat(() => console.log("Hi"), 3)
// Output: prints "Hi" three times.

// 5. Chaining Callbacks
// Write a function processNumber(num, callback1, callback2) that:
// First applies callback1 to the number.
// Then applies callback2 to the result.
// Example: if callback1 doubles the number, and callback2 squares it, then:
// processNumber(2, double, square) → 16.

