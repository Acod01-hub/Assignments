const customerName = prompt("Enter Customer Name:");
const productCount = Number(prompt("Enter Number of Products:"));
let totalBill = 0;
let highestPrice = 0;
let expensiveProduct = "";
for (let i = 1; i <= productCount; i++) {
    const productName = prompt(`Enter Product ${i} Name:`);
    let quantity = Number(prompt(`Enter Quantity of ${productName}:`));
    while (quantity <= 0 || isNaN(quantity)) {
        quantity = Number(prompt("Invalid quantity! Enter again:"));
    }
    let price = Number(prompt(`Enter Price of ${productName}:`));
    while (price < 0 || isNaN(price)) {
        price = Number(prompt("Invalid price! Enter again:"));
    }
    let amount = quantity * price;
    console.log(`\nProduct ${i} Details:`);
    console.log("Product:", productName);
    console.log("Quantity:", quantity);
    console.log("Price:", price);
    console.log("Amount:", amount);
    totalBill += amount;
    if (price > highestPrice) {
        highestPrice = price;
        expensiveProduct = productName;
    }
}
let discount = 0;
if (totalBill >= 5000) {
    discount = totalBill * 0.20;
}
else if (totalBill >= 3000) {
    discount = totalBill * 0.15;
}
else if (totalBill >= 1000) {
    discount = totalBill * 0.10;
}
else {
    discount = 0;
}
let billAfterDiscount = totalBill - discount;
let gst = billAfterDiscount * 0.18;
let finalBill = billAfterDiscount + gst;
console.log("\nBILL SUMMARY");
console.log("Customer Name:", customerName);
console.log("Total Bill:", totalBill.toFixed(2));
console.log("Discount:", discount.toFixed(2));
console.log("GST (18%):", gst.toFixed(2));
console.log("Final Bill:", finalBill.toFixed(2));
console.log("Most Expensive Product:", expensiveProduct);
console.log("Price:", highestPrice);
const payment = prompt("Enter Payment Method (Cash, UPI, Card)");
switch (payment) {
    case "Cash":
        console.log("Payment by Cash.");
        break;
    case "UPI":
        console.log("Payment by UPI.");
        break;
    case "Card":
        console.log("Payment by Card.");
        break;
    default:
        console.log("Invalid Payment Method.");
}