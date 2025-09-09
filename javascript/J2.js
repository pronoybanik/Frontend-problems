


//1:- Hoisting and variable scope in JavaScript
function fn() {
    return 'Hello World';
};
console.log(fn());

var value = 100;
console.log(value);

//2:- let, var, and const in JavaScript 
// var is block scoped 
// let and const are function scoped 

if (true) {
    var value1 = 200;
    const value2 = 200;
    console.log("Prient-1",value1);
    console.log("Prient-2",value2);
}
// console.log("Prient-1",value1);
// console.log("Prient-2",value2);


//3:- javascript primitive data types immutable;
// 1: Number;
// 2: String;
// 3: Boolean;
// 4: Undefined;
// 5: Null;
// 6: Symbol;
// 7: BigInt;

//4:- javascript non-primitive data types immutable;
// 1: Object;
// 2: Array;    
// 3: Function;




