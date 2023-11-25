// function declaration

// function singHappyBirthday(){
//     console.log("Happy birthday")
// }

// singHappyBirthday();// calling the function

// function sumTwoNumbers(number1,number2){
//     return number1 + number2
// }

// console.log(sumTwoNumbers(4,6))//printing the returning value


// question
// function isEven(number){
//     if(number%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isEven(7))// false

// function firstchar(anyString){
//     return anyString[0];
// }
// console.log(firstchar("Hello world"))

// function targetindex(array,target){
//     for(let index in array){
//         if (array[index]==target){
//             return index;
//         }
//     }
//     return -1;
// }

// console.log(targetindex([1,2,3,4,5],4))


// function expression
// const isEven = function(number){
//     return number%2===0;
// }


// console.log(isEven(8))

/* Arrow Functions */

// const isEven = (number)=>{
//     return number%2===0;
// }

// console.log(isEven(7));

/* hoisting */


// hello()//hello world
// function hello(){
//     console.log("hello world");
// }

// hello()// error 
// const hello = function(){
//     console.log("hello world");
// }

/* function inside function */

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



/* lexical scope */
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

// // default parameters

// function addTwo(a,b=8){// default parameters
//     return a+b;
// }

// const ans = addTwo(6);
// console.log(ans)

// // rest parameters

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

// param destructuring

// const person={
//     first_name:"sushant",
//     gender:"male",
// }
// function printDetails(obj){
//     console.log(obj.first_name);
//     console.log(obj.gender);
// }
// function printDetails({first_name, gender}){
//     console.log(first_name);
//     console.log(gender);
// }

// printDetails(person)

// callback functions


// function myfunc2(name){
//     console.log("inside my func2 ");
//     console.log(`your name is ${name}`);
// }
// function myfunc(a){
//     console.log("I AM A FUNC and i can..");
//     a("sushant");
// }

// // myfunc([1,2,3,4]);
// // myfunc("sushant");
// // myfunc(6);
// myfunc(myfunc2)

// function returning function
function myfunc(){
    function hello(){
        console.log("hello");
    }
    return hello;
}
const ans = myfunc();
ans();













