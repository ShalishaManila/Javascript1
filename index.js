let usrPrice = prompt("Enter your price: ex: $40 ");

console.log("User Given price: " , usrPrice);
let usrPriceNumber = parseFloat(usrPrice.slice(1));

console.log(usrPriceNumber);

let discount = 0.1; //10%

let discountedPrice = usrPriceNumber - (usrPriceNumber * discount);

console.log("Y0ur New Price: $", discountedPrice);