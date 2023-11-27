// 1. function declaration
// First Way
/*

function singHappyBirthday(){
    console.log("Happy birthday")
}

singHappyBirthday();// calling the function

*/


/*
function sumTwoNumbers(number1,number2){
    return number1 + number2
}

console.log(sumTwoNumbers(4,6))//printing the returning value
*/

/*
function targetindex(array,target){
    for(let index in array){
        if (array[index]==target){
            return index;
        }
    }
    return -1;
}

console.log(targetindex([1,2,3,4,5],4))
*/


// 2. function expression
// const isEven = function(number){
//     return number%2===0;
// }


// console.log(isEven(8))

/* 3.  Arrow Functions */

// const isEven = (number)=>{
//     return number%2===0;
// }

// console.log(isEven(7));

/* 3. hoisting */


// hello()//not defined yet in function declaration but also gives hello world 
// function hello(){
//     console.log("hello world");
// }

// hello()// error 
// const hello = function(){
//     console.log("hello world");
// }

/* 4. function inside function */

// const app =()=>{
//     const myfunc=()=>{
//         console.log("hello myfunction");
//     }
//     const addTwo=(num1,num2)=>{
//         return num1+num2;
//     }
//     console.log("inside app");
//     myfunc();
//     console.log(addTwo(6,8));
// }
// app();



/* 5. lexical scope */
// const myVar = "value1";
// function myApp(){
//     function myfunc(){
//         const myVar="value58";
//         console.log("inside myfunction",myVar)
//     }
//     console.log(myVar);
//     myfunc();
// }
// myApp();

// 6. default parameters

// function addTwo(a,b=8){// default parameters
//     return a+b;
// }

// const ans = addTwo(6);
// console.log(ans)

// 7. rest parameters

// function myFunc(a,b,...c){// saare bache hue 3,5 ke alawa c me chale jayenge array ke form me
//     console.log(`a is ${a},b is ${b},c is ${c}`);
// }
// myFunc(3,5,7,8,0,1)


// function addAll(...number){
//     console.log(number);
//     console.log(Array.isArray(number))
//     total=0
//     for (let num of number){
//         total+=num
//     }
//     return total;
// }
// console.log(addAll(1,2,3,4,5))

// 8. param destructuring

// const person={
//     first_name:"sushant",
//     gender:"male",
// }
// function printDetails(obj){
//     console.log(obj.first_name);
//     console.log(obj.gender);
// }
// function printDetails({first_name:Name, gender:Gender}){
//     console.log(Name);
//     console.log(Gender);
// }

// printDetails(person)
// printDetails(person);

// 9.  callback functions


// function myfunc2(name){
//     console.log("inside my func2 ");
//     console.log(`your name is ${name}`);
// }
// function myfunc(a){
//     console.log("I AM A FUNC and i can..");
//     a("sushant");
// }

// myfunc(myfunc2)

// 10. function returning function
// function myfunc(){
//     function hello(){
//         console.log("hello123");
//     }
//     return hello;
// }
// const ans = myfunc();
// ans();













