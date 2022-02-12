// Tip calculator

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
    bill * 0.2;
console.log(`the bill is ${bill}, the tip was ${tip} and the total was ${bill + tip}`)
