const nums = require("./nums");

let numArray = nums.split(/\s+/);
numArray = numArray.map(item => parseInt(item));
// console.log(numArray);

// find two entries that sum to 2020 and multiply together
// at each position, do 2020-[i] and see if that is in the array
let obj = {};
for (let num of numArray) {
  obj[num] = 2020 - num;
};

let solution;

for (let key of Object.keys(obj)) {
  if (obj[key] in obj) {
    let num1 = parseInt(key);
    let num2 = parseInt(obj[key]);
    solution = num1 * num2;
    console.log(`num1 ${num1}
    num2 ${num2}
    solution ${solution}`)
  }
}

// part 2
