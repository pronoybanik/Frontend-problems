function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 2, 3, 4)); // 10

const arr1 = [1, 2, 3];
const arr2 = [2, 4, 5];

// Spread combines them
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5]


const user = { name: "Alice", age: 20, country: "BD" };
const { name, ...rest } = user;

console.log(name); // "Alice"
console.log(rest); // { age: 20, country: 'BD' }

