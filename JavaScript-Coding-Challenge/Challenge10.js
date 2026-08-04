const numbers = [-9, -2, -76, -35, -65, 8, 33, 89, 56];

function filterNegativeNumbers(arr) {
  let positiveNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveNumbers.push(arr[i])
    };
  };

  return positiveNumbers;
};

console.log(filterNegativeNumbers(numbers));