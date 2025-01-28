// Operator

// 1. Arithmetic Operator - + ,- , * , / , %

let sum = 5 + 9;

// 2. Comparison Operator - == , > , < , !=

// let age = 14;

// if (age > 18) {
//   console.log("You are adult !");
// }

// 3. Logical Operators - && , || , !

let authenticated = true;
let admin = false;

if (authenticated && admin) {
  console.log("Correct Code");
}

// 4. Assignment Operators - = , += , -= , *= , /=

let marks = 40;
marks += 20;

console.log(marks);

// Control Structures

// if , else

let age = 21;

if (age > 18) {
  console.log("You are adult !");
} else {
  console.log("You are child");
}

// if , else if , else

let day = "Monday";

if (day == "Sunday") {
  console.log("Monday");
} else if (day == "Saturday") {
  console.log("Saturday");
} else {
  console.log("Other Day");
}

// Switch

let mark = 90;

switch (mark) {
  case 90:
    console.log("A Grade");
    break;
  case 80:
    console.log("B Grade");
    break;
  case 70:
    console.log("C Grade");
    break;

  default:
    console.log("You are not Qualified !");
    break;
}

let count = 14;

switch (true) {
  case count < 18:
    console.log("Less than 18");
    break;
  case count > 25:
    console.log("Greater than 18");
    break;
  case count == 25:
    console.log("It is Correct");
    break;

  default:
    console.log("Invalid count ");
    break;
}

//loops

// 1. for loop

for (let num = 1; num <= 10; num++) {
  //   console.log(num * 7);
}

// 2. while loop

let i = 1;

while (i <= 10) {
  console.log(i * 7);
  i++;
}

// 3. Do while

let m = 1;
do {
  console.log("m : " + m);
  m++;
} while (m <= 10);

// 4.  forEach loop

let arr = [1, 2, 3, 4, 5];

arr.forEach((element) => {
  console.log("foreach: " + element);
});
