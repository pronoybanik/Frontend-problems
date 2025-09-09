
// var global scop
var name = "Pronoy";
var name = "Banik"; // Allowed reassign 

if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // ✅ works (var leaks out of block)
console.log(b); // ❌ error (let is block-scoped)
console.log(c); // ❌ error (const is block-scoped)



function test() {
  if (true) {
    var x = 100;
    let y = 200;
  }
  console.log(x); // ✅ works 
  console.log(y); // ❌ error
}

test();


// ---let variable---
let city = "Dhaka";
city = "Chittagong"; // Allowed Re-declare

if (true) {
  let hobby = "Coding";
  console.log(hobby); // Coding
}

// console.log(hobby); // Error: hobby is not defined


// ---const variable---
const country = "Bangladesh";
// country = "India"; // ❌ Error

const user = {
  name: "Pronoy"
};

user.name = "Banik"; // ✅ Object-এর ভেতরের মান বদলানো যায়


