// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for (i = 0; i < 10; i++);
console.log(i);

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
// Using a for loop to print even numbers from 1 to 10
for (i = 2; i <= 10; i += 2) {
  console.log(i);
}

/* for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
let i = 1;

while (i <= 10) {
  console.log(i);
  i += 2;
}

/* let i = 1;
while (i <= 10) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} */

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

let num = prompt("Enter a number: ");
for (let i = 1; i <= 10; i++) {
  console.log(num + "X" + i + "=" + num * i);
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.

let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.

let num1 = prompt("Enter a number: ");
let fact = 1;
for (let i = 1; i <= num1; i++) {
  fact *= num1;
  console.log(fact);
}

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

let num2 = prompt("Enter a number: ");
let a = 0;
let b = 1;
let c = 0;
while (c <= num2) {
  console.log(c);
  a = b;
  b = c;
  c = a + b;
}

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

let num3 = 20;
while (num3 >= 5) {
  console.log(num3);
  num3 -= 5;
}
