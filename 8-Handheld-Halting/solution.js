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
// let score = runProgram();
// console.log(score);

const checkMe = (array) => {
  // console.log(array[0]);
  let accumulator = 0;
  let positions = [];
  for (let i = 0; i >= 0;) {
    // console.log(i, positions);
    if (!positions.includes(i)) {
      if (i > array.length - 1) {
        return {
          pass: true,
          accumulator
        }
      } else {
        positions.push(i);
        switch (array[i].instruction) {
          case "acc":
            accumulator += array[i].number;
            i++;
            break;
          case "jmp":
            i += array[i].number;
            break;
          case "nop":
            i++;
            break;
          default:
            break;
        }
      }
    } else if (positions.includes(i)) {
      return {
        pass: false,
        accumulator
      };
    }
  }
}

const part2 = () => {
  let toChange = [];
  for (let i = 0; i < commands.length; i++) {
    if (commands[i].instruction === "jmp") {
      toChange.push({
        instruction: "nop",
        index: i
      })
    } else if (commands[i].instruction === "nop") {
      toChange.push({
        instruction: "jmp",
        index: i
      })
    }
  }
  for (let j = 0; j < toChange.length; j++) {
    let temp = commands.map(command => ({...command}));
    // console.log(temp)
    // replace one instruction
    temp[toChange[j].index].instruction = toChange[j].instruction;
    // check if that was a success
    let result = checkMe(temp);
    if (result.pass === true) {
      console.log(result.accumulator)
      // return result.accumulator;
    }
  }
  // console.log(toChange);
}
part2();
// console.log(runProgram2());