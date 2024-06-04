/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(jobTitle, location, nameOfPartner, numOfChil) {
  console.log(
    "You will be a " +
      jobTitle +
      " in " +
      location +
      ", and married to " +
      nameOfPartner +
      " with " +
      numOfChil +
      " kids."
  );
}

tellFortune("Test", "Test", "Test", "Test");

/*
-----------------------------------------------------------------------------
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(puppyAge) {
  return (
    (xdog = puppyAge * 7),
    console.log("Your doggie is " + xdog + " years old in dog years!")
  );
}
calculateDogAge(3);
/*
-----------------------------------------------------------------------------
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(Age, amountPerDay) {
  (NN = (x - Age) * 365 * amountPerDay),
    console.log(
      "You will need " + NN + " to last you until the ripe old age of " + x
    );
}
calculateSupply(30, 3);

/*
-----------------------------------------------------------------------------
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
  console.log("Hello " + name);
}
greet("Rami");
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double(cat) {
  return 2 * x;
}

function double(num7) {
  return 2 * 7;
}

function double(x) {
  return 2 * x;
}
/*
-----------------------------------------------------------------------------
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
  return 2 * x;
}
double1(1);

function double2(x) {
  return 2 * x;
}
double2(2);

function double3(x) {
  return 2 * x;
}
double3(3);
/*
-----------------------------------------------------------------------------
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(a) {
  (c = a * a * a), console.log("cube = " + c);
}
cube(3);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1, num2) {
  return (
    (multiplySum = num1 * num2), console.log("The result is : " + multiplySum)
  );
}
multiply(4, 5);
/*
-----------------------------------------------------------------------------
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age) {
  if (age >= 20) {
    console.log("yes you can");
  } else {
    (x = 20 - age),
      console.log("please come back after " + x + " years to get License");
  }
}
canIGetADrivingLicense(30);
/*
-----------------------------------------------------------------------------
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(str1, str2) {
  if (str1.length == str2.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}
/*
-----------------------------------------------------------------------------
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
/*
-----------------------------------------------------------------------------
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(smallNum1, smallNum2, smallNum3) {
  if (smallNum1 < smallNum2 && smallNum1 < smallNum3) {
    console.log(smallNum1 + " : is the smaller Num");
  } else if (smallNum2 < smallNum1 && smallNum2 < smallNum3) {
    console.log(smallNum2 + " : is the smaller Num");
  } else {
    console.log(smallNum3 + " : is the smaller Num");
  }
}
smallerNubmer(5, 1, 3);
/*
-----------------------------------------------------------------------------
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(s1, s2, s3, s4, s5) {
  len = Math.min(s1.length, s2.length, s3.length, s4.length, s5.length);
  if (len == s1.length) {
    console.log(s1);
  } else if (len == s2.length) {
    console.log(s2 + " : is the shorter string");
  } else if (len == s3.length) {
    console.log(s3 + " : is the shorter string");
  } else if (len == s4.length) {
    console.log(s4 + " : is the shorter string");
  } else if (len == s5.length) {
    console.log(s5 + " : is the shorter string");
  }
}
shorterString("air", "school", "car", "by", "github");

/*
-----------------------------------------------------------------------------
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(s1, s2, s3, s4, s5) {
  len = Math.max(s1.length, s2.length, s3.length, s4.length, s5.length);
  if (len == s1.length) {
    console.log(s1);
  } else if (len == s2.length) {
    console.log(s2 + " : is the longer string");
  } else if (len == s3.length) {
    console.log(s3 + " : is the longer string");
  } else if (len == s4.length) {
    console.log(s4 + " : is the longer string");
  } else if (len == s5.length) {
    console.log(s5 + " : is the longer string");
  }
}
longerString("air", "school", "car", "by", "github");
/*
-----------------------------------------------------------------------------
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(num) {
  if (num % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isEven(50);

/*
-----------------------------------------------------------------------------
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num) {
  if (num % 2 == 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isOdd(51);
/*
-----------------------------------------------------------------------------
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num) {
  if (num < 0) {
    console.log(-1 * num);
  } else {
    console.log(num);
  }
}
/*
-----------------------------------------------------------------------------
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
fullName("Alex", "Mercer");
/*
-----------------------------------------------------------------------------
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(Num1, Num2, Num3, Num4, Num5) {
  (averege = (Num1 + Num2 + Num3 + Num4 + Num5) / 5),
    console.log("The Average is : " + average);
}
average(1, 2, 3, 4, 5);

/*
-----------------------------------------------------------------------------
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
  console.log("This is a Random Number: " + Math.random());
}
randomNumber();
/*
-----------------------------------------------------------------------------
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(min, max) {
  console.log(
    "Just a Random Number between " +
      max +
      " and " +
      min +
      " : " +
      Math.random() * (max - min + 1)
  );
}
randomBetweenNumbers(1, 8);
/*
-----------------------------------------------------------------------------
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversity(x) {
  if (x >= 95 && x <= 100) {
    console.log("youre grade is: A");
  } else if (x >= 85 && x <= 94) {
    console.log("youre grade is: B");
  } else if (x >= 70 && x <= 84) {
    console.log("youre grade is: C");
  } else if (x >= 50 && x <= 69) {
    console.log("youre grade is: D");
  } else if (x >= 0 && x <= 49) {
    console.log("youre grade is: F");
  }
}
/*
-----------------------------------------------------------------------------
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
count = 0;
function counter() {
  return (count = count += 1);
}
console.log(counter());
console.log(counter());
console.log(counter());
/*
-----------------------------------------------------------------------------
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1


*/
count = 0;
function counter() {
  count = count += 1;
}
function resetCounter() {
  console.log(counter);
  count = 0;
}
console.log(counter());
console.log(counter());
console.log(counter());

resetCounter();
console.log(counter());
console.log(counter());
