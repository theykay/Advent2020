// grab input, replace given values with other values
const input = require("./input").replace(/bags/g, "bag").replace(/,/g, "");

// split each line
const input2 = input.split(`\n`);
// split each to get color of outer bag
// input 3 is formatted as an object with
// key => color of container bag
// value => {bag-within: #, bag-within: #,...}
const input3 = {};
input2.forEach(rule => {
  rule = rule.replace(" bag.", "");
  // split into array with container bag as first element
  let newRule = rule.split("bag");
  // make the color descriptor(s) into one word
  newRule[0] = newRule[0].replace(" ", "");

  // let obj = {
  //   holder: "",
  //   contents: {}
  // };

  // set the container bag descriptor as value in object with key "holder"
  // obj.holder = newRule[0].trim();
  let name = newRule[0].trim();

  // remove word contain
  newRule[1] = newRule[1].replace("contain ", "").trim();

  // only push bag info to contents object if holder contains other bags
  if (newRule[1] !== "no other") {
    // cycle through whichever bags are contained and create an
    // object containing the bag color and how many fit into holder
    let tempObj = {};
    for (let i = 1; i < newRule.length; i++) {
      newRule[i] = newRule[i].trim()
      let holdthis = newRule[i].split(" ");
      let amount = parseInt(holdthis[0]);
      delete holdthis[0];
      let color = holdthis.join("");
      // add new key-value pairs for each color (key = color, value = amount)
      tempObj[color] = amount;
    }
    // obj.contents = tempObj;
    input3[name] = tempObj;
  } else {
    input3[name] = {};
  }
});
console.log(input3["plaidtan"]);

// part2 solution
let total = 0;

const thisWillDestroyMe = (color) => {
  if (Object.keys(input3[color]).length > 0) {
    for (const key in input3[color]) {
      total += input3[color][key] * thisWillDestroyMe(key);
    }
  }
  return total;
}

const goldy = thisWillDestroyMe("shinygold");
console.log(goldy);

// input4 is formatted as an object with
// key = bag color
// value = {bag-containing-color: # of bag-color that fit in bag-containing-color}
let input4 = {}
input2.forEach(rule => {
  rule = rule.replace(" bag.", "");
  let newRule = rule.split("bag");
  newRule[0] = newRule[0].replace(" ", "");
  let name = newRule[0].trim();
  newRule[1] = newRule[1].replace("contain ", "").trim();

  for (let i = 1; i < newRule.length; i++) {
    newRule[i] = newRule[i].trim()
    let holdthis = newRule[i].split(" ");
    let amount = parseInt(holdthis[0]);
    delete holdthis[0];
    // this will be key for object containing rules
    let color = holdthis.join("");
    if (!input4[color]) {
      input4[color] = {};
    }
    input4[color][name] = amount;
  }
});
// console.log(input4);

// part1 solution
let total2 = 0;
let alreadyCounted = [];

const thisIsntEvenMyFinalForm = (color) => {
  if (input4.hasOwnProperty(color) && (Object.keys(input4[color]).length > 0)) {
    for (const key in input4[color]) {
      if (!alreadyCounted.includes(key)) {
        alreadyCounted.push(key)
        total2++;
        thisIsntEvenMyFinalForm(key);
      }
    }
  }
  return total2;
}

const aFinal = thisIsntEvenMyFinalForm("shinygold");
// console.log(aFinal)