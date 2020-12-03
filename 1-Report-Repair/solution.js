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
    // console.log(`num1 ${num1}
    // num2 ${num2}
    // solution ${solution}`)
  }
}

// part 2
numArray = numArray.sort((a, b) => a - b);
// console.log(numArray[numArray.length - 1]);

const result = [];
// works, but runs infinitely...... the numbers logged are the ones needed tho lol
for (let indexA = 0; indexA < numArray.length - 2; indexA++) {
  const a = numArray[indexA];
  let indexB = indexA + 1;
  let indexC = numArray.length - 1;

  do {
    const b = numArray[indexB];
    const c = numArray[indexC];
    console.log(a, b ,c);
    if ((a + b + c) === 2020) {
      result.push([a, b, c]);
    }

    if ((a + b + c) > 2020) {
      // while (numArray[indexC - 1] === c) { indexC--;}
      indexC--;
    }

    if ((a + b + c) < 2020) {
      // while (numArray[indexB + 1] === b) { indexB++;}
      indexB++;
    }

  } while (indexB < indexC)
}
console.log(result);