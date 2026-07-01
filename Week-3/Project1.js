const studentName = prompt("Enter Student Name:");
let total = 0;
let highest = -1;
let lowest = 101;
const marks = [];
for (let i = 0; i < 5; i++) {
    let mark = Number(prompt(`Enter marks for Subject ${i + 1} (0-100):`));
    while (mark < 0 || mark > 100 || isNaN(mark)) {
        mark = Number(prompt("Invalid marks! Enter between 0 and 100:"));
    }
    marks.push(mark);
    total += mark;
    if (mark > highest) {
        highest = mark;
    }
    if (mark < lowest) {
        lowest = mark;
    }
}
let average = total / 5;
let percentage = (total / 500) * 100;
let grade;
if (percentage >= 90) {
    grade = "A+";
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 50) {
    grade = "C";
}
else {
    grade = "Fail";
}
console.log("STUDENT REPORT CARD");
console.log("Student Name:", studentName);
console.log("\nSubject Marks:");
for (let i = 0; i < marks.length; i++) {
    console.log(`Subject ${i + 1}: ${marks[i]}`);
}
console.log("\nTotal Marks:", total);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Grade:", grade);
console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);
const day = prompt("Enter Day (Monday-Sunday):");
switch(day) {
    case "Monday":
        console.log("Give your best today.");
        break;
    case "Tuesday":
        console.log("Small progress matters.");
        break;
    case "Wednesday":
        console.log("Stay focused.");
        break;
    case "Thursday":
        console.log("Success comes from consistency.");
        break;
    case "Friday":
        console.log("Finish the week strong.");
        break;
    case "Saturday":
        console.log("Take time to relax and recharge.");
        break;
    case "Sunday":
        console.log("Prepare for the week ahead.");
        break;
    default:
        console.log("Invalid Day!");
}