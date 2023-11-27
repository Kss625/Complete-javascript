// A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence
//typeof used to give a data type of variables

// 7 primitive Data-Type in JS(number,string,boolean,undefined,null,BigInt,Symbol)-non reference 
// non-primitive data types in JS(objects,array,)-reference data types

age=20//number
age=age+1
Name="Sushant karn"//string
console.log(age , typeof age,Name,typeof Name)


car=null//object
knowledge=undefined//undefined
let num;//undefined


console.log(car,knowledge,typeof knowledge,typeof car,num,typeof num);

married=false//boolean
console.log(married,typeof married)

college=Symbol("DSEU")//symmbol
console.log(college,typeof college);

roll_no=BigInt(12345)//BigInt
console.log(roll_no,typeof roll_no);

// above way without let,const,var is not prefer to define variables
// let , const , var

// let keyword,
let name;
name="tony stark";
console.log(name);
// let name="sk" variable cannot be re declared for let keyword but can be updated, a block scope variables

// const keyword-cannot be re-declared and cannot be updated,block scope variable

//var keyword-can be re-declared and can be updated,global scope variables





const student={
    fullName: "Sushant Kumar",
    age:20,
    roll_no:34
}
console.log(student,typeof student,student.fullName)
console.log(student["age"]);

student["age"]=student["age"]+1;
console.log(student.age);

// swapping of two numbers
let num1,num2;
num1=6;
num2=8;
console.log(`Before Swapping: num1=${num1},num2=${num2}`)//template strings
num3 = num1+num2;
num1=num3-num1;
num2 = num3-num2;
console.log(`After Swapping: num1=${num1},num2=${num2}`)













