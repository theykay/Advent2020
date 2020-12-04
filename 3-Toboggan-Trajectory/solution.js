const input = require("./input");
let forest = input.split(/\n/);

for (let i = 0; i < forest.length; i++) {
  forest[i] = forest[i].split("");
}

let collisions = 0;
let position = 0;

for (let branch = 0; branch < forest.length; branch++) {
  if (forest[branch][position] === "#") {
    collisions++;
  }
  // console.log("branch: ", branch);
  // console.log("position: ", position);
  // console.log("-------------------");


  if (position === 30) {
    position = 2
  } else if (position === 29) {
    position = 1
  } else if (position === 28) {
    position = 0
  } else {
    position = position + 3;
  }
}

console.log(collisions);