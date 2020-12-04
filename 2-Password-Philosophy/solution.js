const input = require("./input");

let converted = input.split(`\n`);
let data = []
converted.forEach(entry => {
  entry = entry.split(/[\s:-]/);
  const obj = {};
  obj.min = parseInt(entry[0]);
  obj.max = parseInt(entry[1]);
  obj.char = entry[2];
  obj.string = entry[4];
  data.push(obj);
});

const checkPassword = (obj) => {
  const arr = obj.string.split('');
  let num = 0;
  arr.forEach(char => {
    if (char === obj.char) {
      num++;
    }
  })
  if (num >= obj.min && num <= obj.max) {
    return true;
  }
  return false;
}

let passedWords = 0;
data.forEach(item => {
  if (checkPassword(item)) {
    passedWords++;
  }
})
console.log(passedWords);

// part 2
const checkAgain = (obj) => {
  const arr = obj.string.split('');
  obj.min--;
  obj.max--;
  if ((arr[obj.min] === obj.char && arr[obj.max] !== obj.char) ||
  (arr[obj.max] === obj.char && arr[obj.min] !== obj.char)) {
    return true;
  } 
  return false;
}

let newPassed = 0;
data.forEach(item => {
  if (checkAgain(item)) {
    newPassed++;
  }
})
console.log(newPassed);