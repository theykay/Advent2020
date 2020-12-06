const input = require("./input");
let forest = input.split(/\n/);

for (let i = 0; i < forest.length; i++) {
  forest[i] = forest[i].split("");
}

function collider(over, down) {
  let collisions = 0;
  let position = 0;
  for (let branch = 0; branch < forest.length; branch = branch + down) {
    if (forest[branch][position] === "#") {
      collisions++;
    }
    position = (position + over) % branch.length;
  }
  // console.log(collisions);
  return collisions;
}
const path1 = collider(1,1);
const path2 = collider(3,1);
const path3 = collider(5,1);
const path4 = collider(7,1);
const path5 = collider(1,2);
const product = path1 * path2 * path3 * path4 * path5;

console.log(`path 1 ${path1}\npath 2 ${path2}\npath 3 ${path3}\npath 4 ${path4}\npath 5 ${path5}
product ${product}`);