// important array method

const numbers = [4,3,5,8];
// function multiplyby2(number,index){
//     console.log(` index is ${index},${number}*2=${number*2}`);
// }
// for(let i =0;i<numbers.length;i++){
//     multiplyby2(numbers[i],i)
// }

// 1.) for each-print the result 

// numbers.forEach(multiplyby2);

// numbers.forEach(function(number,index){
//     console.log(` index is ${index},${number}*2=${number*2}`)
// });

const users = [
    {firstName: "harshit",age:25},
    {firstName: "mohit",age:27},
    {firstName:"Rohit",age:24},
    {firstName: "harshita",age:22},

]
// console.log("Old Way");
// function user_name(user){
//     console.log(user.firstName)
// }
// users.forEach(user_name)

// const user = function(user){
//     console.log(user.firstName)
// }
// users.forEach(user)


// console.log("Modern Way");
// for(let user of users){
//     console.log(user["firstName"]);
// }
// const firstname = users.forEach((user)=>{//it acts as a loop
//     console.log(user.firstName)

// })





// 2.) map method=> return array

const num =  [3,4,5,6,1,8];
/*
const square = function(number,index){//gives value , index
    return` index is ${index} and square= ${number*number}`
}
const squareNumber = num.map(square);
console.log(squareNumber)

const userName=users.map((user,index)=>{
    return `index is ${index} and firstname is ${user.firstName}`
})
console.log(userName)
*/

// 3.) filter method-helps to filter the array through given condition return true or false

const EvenNumber=num.filter((number)=>{
    return number%2===0;
})
console.log(EvenNumber);

// 4.) reduce method-provides sum

let sum = 0;
const reduceNum=num.reduce((accumalator,currenValue)=>{//(accumalator,current_value)
    return accumalator+currenValue;

})//beech me initaial value bhi daal skte hain
console.log(reduceNum);

const userCat = [
    {
        product_id:1,product_name:"mobile",price:12000
    },
    {
        product_id:2,product_name:"laptop",price:120000 
    },
    {
        product_id:3,product_name:"Tv",price:15000
    }
]

const totalPrice=userCat.reduce((totalprice,currentproduct)=>{
    return currentproduct.price + totalprice
},0)//important=>totalprice=0
console.log(totalPrice);


// 5.) sort method-return array in ascending and desecnding order
const Num = [10,200,45,43,25]
// Num.sort();//generate order in behalf of string not in number
// console.log(Num);
// const names=["sushant","harshit","riya","priya"]
// names.sort();// now it's correct
// console.log(names);

const ascendingNum=[...Num].sort((a,b)=>{//used this method so that original array does not affected
    return a-b;
})
const Num2=[200,67,89,2000,356]
const descendingNum=[...Num2].sort((a,b)=>{
    return b-a;
})
console.log(ascendingNum);
console.log(descendingNum);


// 6.) find method-give only first element which satisfy condition

const myArray = ["Cat", "Dog", "Tiger","Donkey","Fox"]
const islength3=[...myArray].find((string)=>{
    return string.length===3;
})
console.log(islength3);


const users2 = [
    {firstName: "harshit",age:25},
    {firstName: "mohit",age:27},
    {firstName:"Rohit",age:24},
    {firstName: "harshita",age:22},
];

const myuser = [...users2].find((user)=>{
    return user["age"]>25;
})

console.log(myuser);

// 7.)every method-check every number satisfy given condition or not

const Num3=[200,66,88,2000,356];
const isAllEven=[...Num3].every((number)=>{
    return number%2===0;
})
console.log(isAllEven)

// 8.)some method-if any one satisfies given condition
const Num4=[200,67,88,2000,356];
const isOdd=[...Num4].some((number)=>{
    return number%2!==0;
})
console.log(isOdd);

// 9.) fill method-value,start,end

const myArr=new Array(10).fill(-1);//length=10
console.log(myArr);
const mArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
mArr.fill(0,0,9)// 
console.log(mArr);

// 10.) splice method-start,delete,insert

const MyArr=["item1","item2","item3","item4","item5","item6"];
a=MyArr.splice(1,2);
console.log(MyArr,a);
b=MyArr.splice(1,2,"inserted item1","inserted item2")
console.log(MyArr,b);


















