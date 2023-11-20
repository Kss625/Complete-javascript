// for loops

// printing 5 toimes Hello World!
for(let i=1 ; i <=5 ; i++) {
    console.log("Hello World!");// 5 Times Execute
}


// calculate sum of 1 to n
const num=100;
let sum =0;
for(let i =1 ; i<=num ; i++){
    sum=sum+i;
}

console.log(`sum of integers of 1 to ${num} is ${sum}`);// modern way to write string and value in same line(template strings)

// while loop

// printing 1 to 14 in while loop
let i =1 ;
while(i<=14){
    console.log(i)
    i++;
}

// do while loop

let j=1;
do{
    console.log(j)
    j++;
}while(j<=10);

// for-of,in loop

// for-of used in array and strings
let str = "SushantKarn";
let size=0
for(let i of str){// use for string and arrays
    console.log(i)
    size++;
}
console.log("string size=",size);

// for in used in objects
let students={
    name : "Rahul Kumar",
    age : 20,
    cgpa : 9.5
}
for (let i in students){
    console.log("key=", i,"value=", students[i])
}

// printing even numbers from 0 to 100
for(let i =0 ; i<=100 ; i++){
    if (i%2==0){
        console.log(i)
    }
}

// guessing the number
let gameNum = 25;

let userNum = prompt("Guess the guess number :")

while (userNum != gameNum){ //
    userNum=prompt("You entered wrong number, guess again")

}

console.log("congratulations , you entered the right number....")





















