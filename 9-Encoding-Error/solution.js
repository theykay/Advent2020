const input = require("./input").split(`\n`);
let data = [];
input.forEach(number => {
  let num = parseInt(number);
  data.push(num);
});
console.log(data);
// let temp = {};
const checkIt = () => {
  for (let i = 26; i < data.length; i++) {
    let sum = data[i];
    let temp = data.slice(i-28, i-1);
    for (let j = 0; j < temp.length; j++) {
      let difference = sum - temp[j];
      if (temp.includes(difference)) {
        break;
      } else if (!temp.includes(difference) && j === temp.length - 1) {
        console.log(data[i]);
        i = data.length;
      }
    }
  };
};

checkIt();