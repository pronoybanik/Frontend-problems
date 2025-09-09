const number = [1, 2, 3, 4, 5];

const firstEven = number.filter((num) => num % 2 === 0);
const bigNumber = number.filter((num) => num >= 3);
const result = number.filter((num) => num);


console.log("firstEven", firstEven);
console.log("bigNumber", bigNumber);
console.log("result", result);

