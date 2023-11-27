// 1. for loops

// printing 5 times Hello World!


for(let i=1 ; i <=5 ; i++) {
    console.log("Hello World!");// 5 Times Execute until i>5
}


// calculate sum of 1 to n
const num=100;
let sum =0;
for(let i =1 ; i<=num ; i++){
    sum=sum+i;
}

console.log(`sum of integers of 1 to ${num} is ${sum}`);

// 2. while loop

// printing 1 to 14 in while loop
let i =1 ;
while(i<=14){
    console.log(i)
    i++;
}

// 3. do while loop

let j=1;
do{
    console.log(j)
    j++;
}while(j<=10);

// for-of,in loop

// 4.for-of used in array and strings
let str = "SushantKarn";

console.log("USing for of loop in string,array and objects")
console.log("Gives value for strings and array and error for objects");
console.log("for-of loop in string")
for(let i of str){
    console.log(i)
}




console.log("for-of loop in arrays")
let myArr = [1,3,4,5,6]
for(let i of myArr){
    console.log(i);
}


console.log("using for-of with objects with special method which gives key");
const myobj= {
    Name : "Sushant Karn",
    Roll_No : 66,
    Age : 20,
}
/* Error in this format
for(let i of myobj){
    console.log(i);
}
*/


for(let key of Object.keys(myobj)) {
    console.log(`${key} :  ${myobj[key]}`);
}

console.log("using for in loop in strings,array,objects")
console.log("Give index for strings and Array")


console.log("for-in in Array")


for(let j in myArr){
    // console.log(i); Gives index value
    console.log(`index is ${j} and value is ${myArr[j]}`);
}


console.log("for-in in Strings");


for(let i in str){
    console.log(`index is ${i} and value is ${str[i]}`)
}


// for in used in objects
let students={
    name : "Rahul Kumar",
    age : 20,
    cgpa : 9.5
}

console.log("for-in loop with objects");

for (let i in students){
    console.log("key=", i,"value=", students[i])
}

console.log("Problems");

// printing even numbers from 0 to 100
// for(let i =0 ; i<=100 ; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }

// guessing the number
// let gameNum = 25;

// let userNum = prompt("Guess the guess number :")

// while (userNum != gameNum){ //
//     userNum=prompt("You entered wrong number, guess again")
// }

// console.log("congratulations , you entered the right number....")





















