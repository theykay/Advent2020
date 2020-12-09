const input = require("./input");
const groups = input.split(`\n\n`);

let groupInfo = [];

let sum = 0;

groups.forEach(group => {
  let temp = [];
  temp = group.split('\n');
  let people = temp.length;
  // console.log(temp);

  let questions = 0;
  let tempObj = {};
  [...group].forEach(answer => {
    if (answer !== `\n`) {
      if (tempObj[answer]) {
        tempObj[answer]++;
      } else if (!tempObj[answer]) {
        tempObj[answer] = 1;
      }
    }
  })
  console.log(people, temp, tempObj);
  let obj = { people, questions }
  groupInfo.push(obj);
  // let num = Object.keys(tempObj).length
  let num = 0;
  for (const key in tempObj) {
    if (tempObj[key] === people) {
      num++;
    }
  }
  // console.log(num);
  sum += num;
})

console.log(sum);
