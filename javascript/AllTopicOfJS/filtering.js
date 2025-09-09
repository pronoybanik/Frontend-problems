const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
