// voting eligibility
let age = 5;
if(age>18){
    console.log("Able to vote")
}else{
    console.log("Not Able to vote")
}

// even or odd
let num = 20;

if (num%2===0){
    console.log(num,"Even Number");
}else{
    console.log(num,"Odd Number");
}
// classification of human based on their age
let age1 = 100;
if(age1<18){
    console.log("Junior")
}else if(age1>18 && age1<60){
    console.log("Senior")
}else{
    console.log("old")
}

// ternary operator

let age2=34;
let answer = age2>18 ? "adult" : "Not adult";
console.log(answer)

// switch statement-not so use by so many developer
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
    break;
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
//prompt not defined in vs code hence use it on browser
const number = prompt("Enter The Number? ")

if (number%5===0){
    console.log(number,"is multiple of 5 by",number/5,"times.")
}else{
    console.log(number,"is not multiple of 5");
}


// finding grades based on their scores
const scores = 110;
if (scores<=100){
    if (scores<=100 && scores>=80){
        console.log("A GRADE")
    }else if (scores<=79 && scores>=70){
        console.log("B GRADE")
    }else if (scores<=69 && scores>=60){
        console.log("C GRADE")
    }else if(scores<=59 && scores>=50){
        console.log("D GRADE")
    }else{
        console.log("F GRADE")
    }
}else {
    console.log("please enter score between 0 and 100")
}

























