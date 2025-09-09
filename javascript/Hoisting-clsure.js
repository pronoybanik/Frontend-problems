console.log(a); // undefined
var a = 5;

var a;        // Hoisted to top
console.log(a); 
a = 5;


function outer() {
  let name = "Pronoy";
  function inner() {
    console.log(name); 
  }
  return inner;
}

const myFunc = outer(); 
myFunc(); 

