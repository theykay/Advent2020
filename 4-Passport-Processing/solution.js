const input = require("./input");
const demo = `byr:1983 iyr:2017
pid:796082981 cid:129 eyr:2030
ecl:oth hgt:182cm

iyr:2019
cid:314
eyr:2039 hcl:#cfa07d hgt:171cm ecl:#0180ce byr:2006 pid:8204115568

byr:1991 eyr:2022 hcl:#341e13 iyr:2016 pid:729933757 hgt:167cm ecl:gry

hcl:231d64 cid:124 ecl:gmt eyr:2039
hgt:189in
pid:#9c3ea1

ecl:#1f58f9
pid:#758e59
iyr:2022
hcl:z
byr:2016 hgt:68 eyr:1933`;

let data = input.split(`\n\n`);
// let data = demo.split(`\n\n`);
let passports = [];
data = data.forEach(person => {
  let obj = {};
  let item = person.split(/[\s\n]/);
  item.forEach(element => {
    const temp = element.split(`:`);
    obj[temp[0]] = temp[1];
  })
  passports.push(obj);
});

let valid = 0;

passports.forEach(person => {
  const keysNum = Object.keys(person).length;
  if ((keysNum === 8 || (keysNum === 7 && !(person.hasOwnProperty('cid')))) && validate(person)) valid++;
})

function validate(object) {
  console.log(object.hgt);
  let { byr, iyr, eyr, hgt, hcl, ecl, pid } = object;
  let eyecolors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
  byr = parseInt(byr);
  let byrValid = byr >= 1920 && byr <= 2002;
  iyr = parseInt(iyr);
  let iyrValid = iyr >= 2010 && iyr <= 2020;
  eyr = parseInt(eyr);
  let eyrValid = eyr >= 2020 && eyr <= 2030;
  let hgtValid;
  if (hgt.includes("cm") || hgt.includes("in")) {
    let units = hgt.slice(-2);
    hgt = parseInt(hgt.slice(0, -2));
    // console.log(hgt)
    // hgt = hgt.split(/(?<=\D)(?=\d)/);
    if (units === "cm") {
      hgtValid = hgt >= 150 && hgt <= 193;
    } else if (units === "in") {
      hgtValid = hgt >= 59 && hgt <= 76;
    }
  } else hgtValid = false;
  let hclValid;
  // console.log(hcl.match(/#[\da-f]{6}/))
  if (hcl.match(/#[\da-f]{6}/) !== null) {
    hclValid = true;
  } else hclValid = false;
  let eclValid = eyecolors.includes(ecl);
  let pidValid = (pid.match(/\d{9}/) !== null);
  let bar = !hgtValid ? `-----------------------------` : "";
  console.log(`hgt ${hgtValid}${bar}`);
  return (byrValid && iyrValid && eyrValid && hgtValid && hclValid && eclValid && pidValid)
}

console.log(valid)