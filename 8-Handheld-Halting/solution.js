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
console.log(commands);

let accumulator = 0;
let positions = [];

const runProgram = () => {
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
console.log(score);