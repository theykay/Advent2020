const input = require("./input");
const converted = input.split(`\n`);
let commands = []
converted.forEach(entry => {
  let parts = entry.split(' ');
  let obj = {
    instruction: parts[0],
    number: parseInt(parts[1])
  }
  commands.push(obj);
})
// console.log(commands);

const runProgram = () => {
  let accumulator = 0;
  let positions = [];
  for (let i = 0; i < commands.length;) {
    console.log(i, positions);
    if (!positions.includes(i)) {
      positions.push(i);
      switch (commands[i].instruction) {
        case "acc":
          accumulator += commands[i].number;
          i++;
          break;
        case "jmp":
          i += commands[i].number;
          break;
        case "nop":
          i++;
          break;
        default:
          break;
      }
    } else if (positions.includes(i)) {
      return accumulator;
    }
  }
}
let score = runProgram();
// console.log(score);

const runProgram2 = () => {
  let accumulator = 0;
  let positions = [];
  for (let i = 0; i < commands.length;) {
    console.log(i, positions);
    if (!positions.includes(i)) {
      positions.push(i);
      switch (commands[i].instruction) {
        case "acc":
          accumulator += commands[i].number;
          i++;
          break;
        case "jmp":
          i += commands[i].number;
          break;
        case "nop":
          i++;
          break;
        default:
          break;
      }
    } else if (positions.includes(i)) {
      return accumulator;
    }
  }
  return accumulator;
}

const part2 = () => {
  let accumulator = 0;
  let rules = [];
  for (let i = 0; i < commands.length;) {
    i
  }
}

console.log(runProgram2());