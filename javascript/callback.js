
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // call the function passed in
}

function sayBye() {
  console.log("Goodbye!");
}
greet("Alice", sayBye);

// Output:
// Hello Alice
// Goodbye!


// call back
function sayHi() {
    console.log("Hi");
}

function cllFunction(callback) {
    callback()
}

cllFunction(sayHi)