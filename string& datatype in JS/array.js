console.log("Here is : ", "array");
/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]
*/
[1, 79, 45];

["Str", "alex", "moh"];

["the", "fox", "over", "lazy", "dog"];

/*
-----------------------------------------------------------------------------------
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
"Banana" = 1 ,
"Watermelon"= 2
/*
-----------------------------------------------------------------------------------
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
const favoriteFood = ["Test", "Test", "Test", "Test", "Test"];
const Sport = ["Test", "Test", "Test", "Test", "Test"];
const Movie = ["Test", "Test", "Test", "Test", "Test"];

/*
-----------------------------------------------------------------------------------
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arrayy) {
    console.log(arrayy[0]);
  }

  firstOfArray([3, 5, 6, 7]);

/*
-----------------------------------------------------------------------------------
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(L_array) {
    let last_Of_Array = L_array.length - 1;
    console.log(L_array[last_Of_Array]);
  }

  lastOfArray([3, 5, 6, 7]);

/*
-----------------------------------------------------------------------------------
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var rearange_Of_Array = [0, 5, 7, 9];
rearange_Of_Array.push(10);
rearange_Of_Array.shift(0);
rearange_Of_Array.shift(5);
rearange_Of_Array.shift(7);
rearange_Of_Array.unshift(1, 3, 4, 6, 8);

console.log(rearange_Of_Array);
/*
-----------------------------------------------------------------------------------
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var rearange_Of_array2 = [5, 9, -7, 3.5];
rearange_Of_array2.pop(3.5);
rearange_Of_array2.pop(-7);
rearange_Of_array2.shift();
rearange_Of_array2.push(10);
rearange_Of_array2.unshift(1, 3, 4, 6, 8);

console.log(rearange_Of_array2);
/*
-----------------------------------------------------------------------------------
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(m_Array) {
    let LengthOfM_Array = m_Array.length;
    if (LengthOfM_Array % 2 == 0) {
      let middle_Of_Array = LengthOfM_Array / 2;
      let middle_Of_Array2 = LengthOfM_Array / 2 - 1;
      console.log(m_Array[middle_Of_Array]);
      console.log(m_Array[middle_Of_Array2]);
    } else {
      let middle_Of_Array = LengthOfM_Array / 2 - 0.5;
      console.log(m_Array[middle_Of_Array]);
    }
  }

  middleOfArray([3, 5, 2, 4, 1]);x
/*
-----------------------------------------------------------------------------------
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals = ['zebra', 'elephant'];

var nums = [1, 2, 3, 8, 9];
nums = [5, -22, 3.5, 44, 98, 44];
/*
-----------------------------------------------------------------------------------
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(arr, index){
    return arr[index];
}

var nums = [1, 2, 3, 8, 9]
console.log(indexOfArray(nums, 3))
console.log(indexOfArray(nums, 1))
console.log(indexOfArray(nums, 4))
/*
-----------------------------------------------------------------------------------
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(thearray) {
    let arraylength = thearray.length;
    newarray = thearray;
    newarray.pop();
    console.log(newarray);
  }
  arrayExceptLast([1, 2, 3, 8, 9]);
/*
-----------------------------------------------------------------------------------
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr, value) {
    arr.push(value)
    return arr;
}
var nums = [1, 2, 3, 8, 9]
console.log(addToEnd(nums, 5));
nums = [1, 2, 3, 8]
console.log(addToEnd(nums, 5));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
-----------------------------------------------------------------------------------
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let thesum = 0;
      function sumArray(arr1) {
        for (i = 0; i < arr1.length; i++) {
          thesum = thesum + arr1[i];
        }
        console.log(thesum);
      }

      sumArray([1, 2, 3, 8, 9]);
/*
-----------------------------------------------------------------------------------
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }

    return min;
  }

  console.log(minInArray([1, 2, 3, 8, 9]));

/*
-----------------------------------------------------------------------------------
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, element) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== element) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  var nums = [1, 2, 3, 8, 9];
  console.log(removeFromArray(nums, 8));
/*
-----------------------------------------------------------------------------------
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  var nums = [1, 2, 3, 8, 9];
  console.log(oddArray(nums));
/*
-----------------------------------------------------------------------------------
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    let average = sum / arr.length;

    return average;
  }

  var nums = [1, 2, 3, 8, 9];
  console.log(aveArray(nums));

  var nums2 = [1, 2, 3, 8, 9, 77];
  console.log(aveArray(nums2));
/*
-----------------------------------------------------------------------------------
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(arr) {
    let shortest = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length < shortest.length) {
        shortest = arr[i];
      }
    }

    return shortest;
  }

  var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  console.log(shorterInArray(strings));
/*
-----------------------------------------------------------------------------------
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }

    return count;
  }

  var string = "alex mercer madrasa rashed2 emad hala";
  console.log(repeatChar(string, "a"));
  console.log(repeatChar(string, "z"));
/*
-----------------------------------------------------------------------------------
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i].length % 2 !== 0) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  console.log(evenIndexOddLength(strings));
/*
-----------------------------------------------------------------------------------
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(Math.pow(arr[i], i));
    }

    return result;
  }

  var nums = [44, 5, 4, 3, 2, 10];
  console.log(powerElementIndex(nums));
/*
-----------------------------------------------------------------------------------
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(arr) {
    let result = [];

    let i = 0;

    while (i < arr.length) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
      i += 2;
    }

    return result;
  }

  var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
  console.log(evenNumberEvenIndex(nums));