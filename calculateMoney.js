function calculateMoney(tickets) {
  let cash = 0;
  const ticketPrice = 120;
  const guardBill = 500;
  const staffBill = 8 * 50;
  const totalBill = guardBill + staffBill;
  const totalTicketPrice = ticketPrice * tickets;
  if (tickets <= 0 || typeof tickets !== "number") {
    return "Please Input Valid Tickets Number";
  } else {
    cash = totalTicketPrice - totalBill;
    return cash;
  }
}
let cash = calculateMoney(23);
if (cash > 0) {
  console.log("Cash is", cash);
} else if (cash < 0) {
  console.log("Cash is Shortage", cash);
} else {
  console.log(cash);
}
