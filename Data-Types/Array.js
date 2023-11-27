/* a)Array In JavaScript */

// 1.Array is reference types,ordered collection of items
// 2.Array is mutable data-types hence we can replace elements using index value
// 3.Array.isArray(variablename) helps to differentiate between so many objects that it is array or not

// let fruits = ["Apple", "Mango","Orange"];
// let number = [1,2,3,4,5,6,7,8,9]
// let mixed = [1,2,"Sk","karn",null,undefined]


// console.log( typeof fruits,fruits,fruits[2]);// show array is ordered collection of items
// console.log(mixed);

// number[7]=14;
// console.log(number);

// console.log(Array.isArray(fruits))// helps to differentiate between so many objects that it is array or not

/* b) array methods */

let friends = ["Ram","Shyam","Mohan","Riya"];
// console.log(friends);

// i) push functions-change original arrays,only add one element

// friends.push("Sita");
// console.log(friends);
// friends.push(["Richa","Priya"])
// console.log(friends);

// ii) pop functions-give removed elemnts and also removed last elements in javascript

// let unfriends=friends.pop();
// console.log("Now not a list in friends",unfriends);
// console.log(friends);

// iii) unshift-add one element in starting
// let new_friends=["shreya","Ruchi"]
// friends.unshift(new_friends);
// console.log(friends)

// iv)  shift-remove one element from start and removed element bhi dega
// let removed_friend=friends.shift();
// console.log(removed_friend)
// console.log(friends)

/* c) reference and non-reference data types  */

//primitive data type-non reference-stack concept

let num1=6;
let num2=num1;

console.log(`num1=${num1} and num2=${num2}`);
console.log(`After Incrementing num1`)
num1++;
console.log(`num1=${num1} and num2=${num2}`);

//non-primitive data type -reference data types-Heap concept

let array1 = ["item1","item2"];
let array2=array1;

console.log(`array1=${array1} and array2=${array2}`);
console.log(`after incrementing array1`)
array1[1]="item3";
console.log(`array1=${array1} and array2=${array2}`);
console.log(`after incrementing array2`)
array2[1]="item4";
console.log(`array1=${array1} and array2=${array2}`);

// how to clone array-which does not effect arr2 when arr1 is changing
// let arr1 = ["item1", "item2", "item3", "item4"];
// let arr2 = ["item1", "item2", "item3", "item4"];
// let arr2 = arr1.slice(0);//helps to copy arr1 into arr2
// let arr2 = [].concat(arr1);
// let arr2 = [...arr1];/* Important,spread operator */
// arr1.push("item5");
// console.log(arr1===arr2);
// console.log(arr1,arr2);

/*
for loop in array
*/

let fruits1 = ["Apple", "Mango","Orange","grapes","banana"];

for(let i =0 ; i<(fruits1.length) ; i++){
    console.log(fruits1[i]);// if i=5,6 then output is undefined as no elements is specify in index=5 and 5
}

// use const for creating array

const fruits2 =["apple", "banana","strawberry","orange"]
console.log(fruits2);
fruits2.push("Grapes");
console.log(fruits2)

// for of loops-mostly used with strings and array

for(let fruit of fruits2){// it gives value
    console.log(fruit);
}

// for in loop-not generally used with arrays
for(let index in fruits2){// it gives index
    console.log(fruits2[index]);
}

// Array destructing

const myArray = ["value1", "value2", "value3"];
// let myvar1=myArray[0];
// let myvar2=myArray[1];
// console.log(myvar1, myvar2);

let [myvar1, myvar2] = myArray;/*Important ,ye variable defined bhi ho gaye hain */
console.log(myvar1, myvar2);

const myArray2 = ["value1", "value2", "value3","value4","value5"];
let [var1, var2,...NewArray] = myArray2;
console.log(var1, var2, NewArray);

/*
let test = (1,2,34,67); number in javascript
console.log(test,typeof test);
*/








