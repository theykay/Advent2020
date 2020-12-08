const data = require("./input");
let tickets = data.split(`\n`);

const rows = 128;
const cols = 8;

let orderedTickets = [];
let highestID = 0;

const ticketID = (row, column) => (row * 8) + column;

tickets.forEach(ticket => {
  // keep track of position; 0 if upper half, half of total if lower half
  let ticketRow = 0;
  let ticketCol = 0;
  let currentRow = rows;
  const temp = ticket.split('');
  for (let i = 0; i < 7; i++) {
    currentRow = currentRow/2;
    if (temp[i] === "B") {
      ticketRow += currentRow;
    }
  }
  let currentCol = cols;
  for (let j = 7; j < 10; j++) {
    currentCol = currentCol/2;
    if (temp[j] === "R") {
      ticketCol += currentCol;
    }
  }
  // get the ticket id, link it with ticket in an object, push object to array
  let currentID = ticketID(ticketRow, ticketCol);
  let obj = { id: currentID, ticket: ticket };
  orderedTickets.push(obj);
  if (currentID > highestID) highestID = currentID;
})

orderedTickets = orderedTickets.sort(compare());

orderedTickets.forEach((ticket, i) => {
  let above;
  let below;
  if (orderedTickets[i-1]) {
    above = orderedTickets[i-1].id
  }
  if (orderedTickets[i+1]) {
    below = orderedTickets[i+1].id;
  }
  let current = ticket.id;
  if (below - above > 2) {
    console.log(ticket);
  }
});

function compare() {
  return function innerSort(a, b) {
    const varA = a.id;
    const varB = b.id;
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varB > varA) {
      comparison = -1;
    }
    return comparison;
  }
};

// for (let i = 0; i <10; i++) {
//   console.log(i, orderedTickets[i])
// }
console.log(highestID);